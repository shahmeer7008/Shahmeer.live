
"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Card ,CardContent} from "./ui/card"
import { Mail, Linkedin, Github, Facebook, Instagram, Twitter } from "lucide-react"

const contactInfo = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "shahmeer@example.com",
    url: "mailto:shahmeer@example.com",
    position: [-2, 3, 0] as [number, number, number],
    color: "#ef4444",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/muhammad-shahmeer",
    url: "https://linkedin.com/in/muhammad-shahmeer",
    position: [2, 2.5, 0] as [number, number, number],
    color: "#0077b5",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "/muhammad-shahmeer",
    url: "https://github.com/muhammad-shahmeer",
    position: [-1.5, 1.5, 0] as [number, number, number],
    color: "#333333",
  },
  {
    id: "facebook",
    icon: Facebook,
    label: "Facebook",
    value: "/muhammad.shahmeer",
    url: "https://facebook.com/muhammad.shahmeer",
    position: [1.8, 1, 0] as [number, number, number],
    color: "#1877f2",
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@muhammad_shahmeer",
    url: "https://instagram.com/muhammad_shahmeer",
    position: [-2.2, 0.5, 0] as [number, number, number],
    color: "#e4405f",
  },
  {
    id: "twitter",
    icon: Twitter,
    label: "X (Twitter)",
    value: "@m_shahmeer",
    url: "https://twitter.com/m_shahmeer",
    position: [2.5, 0, 0] as [number, number, number],
    color: "#1da1f2",
  },
]

function TreeBranch({
  start,
  end,
  thickness = 0.05,
}: {
  start: [number, number, number]
  end: [number, number, number]
  thickness?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  const direction = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start))
  const length = direction.length()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <mesh
      ref={ref}
      position={[(start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2]}
      rotation={[0, 0, Math.atan2(direction.y, direction.x)]}
    >
      <cylinderGeometry args={[thickness, thickness * 0.8, length, 8]} />
      <meshStandardMaterial color="#8b4513" />
    </mesh>
  )
}

function ContactNode({
  contact,
  trunkPosition,
}: {
  contact: (typeof contactInfo)[0]
  trunkPosition: [number, number, number]
}) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + contact.position[0]) * 0.1
      meshRef.current.position.y =
        contact.position[1] + Math.sin(state.clock.elapsedTime * 2 + contact.position[0]) * 0.05
    }
  })

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 200)
    window.open(contact.url, "_blank")
  }

  return (
    <group ref={meshRef}>
      {/* Branch from trunk to contact */}
      <TreeBranch start={trunkPosition} end={contact.position} thickness={0.03} />

      {/* Contact node */}
      <mesh
        position={contact.position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={handleClick}
        scale={clicked ? 0.8 : hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? contact.color : "#34d399"}
          emissive={hovered ? contact.color : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Contact info popup */}
      {hovered && (
        <Html position={[contact.position[0], contact.position[1] + 0.5, contact.position[2]]}>
          <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg pointer-events-none">
            <div className="flex items-center gap-2 mb-1">
              <contact.icon className="h-4 w-4" style={{ color: contact.color }} />
              <span className="font-semibold text-sm">{contact.label}</span>
            </div>
            <div className="text-xs text-muted-foreground">{contact.value}</div>
          </div>
        </Html>
      )}
    </group>
  )
}

function Tree() {
  const trunkRef = useRef<THREE.Mesh>(null)
  const trunkPosition: [number, number, number] = [0, -1, 0]

  useFrame((state) => {
    if (trunkRef.current) {
      trunkRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.01
    }
  })

  return (
    <group>
      {/* Tree trunk */}
      <mesh ref={trunkRef} position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 3, 8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Ground */}
      <mesh position={[0, -3.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3, 32]} />
        <meshStandardMaterial color="#2d5016" opacity={0.3} transparent />
      </mesh>

      {/* Contact nodes */}
      {contactInfo.map((contact) => (
        <ContactNode key={contact.id} contact={contact} trunkPosition={trunkPosition} />
      ))}

      {/* Tree top decoration */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#228b22" />
      </mesh>
    </group>
  )
}

export function ContactTree() {
  return (
    <>
    
      <Card className="w-full h-full rounded-lg overflow-hidden glass-effect text-2xl font-bold" style={{marginBottom:"100px"}}>
    <CardContent className="p-8">

      Contact Tree
    </CardContent>
   

      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <Tree />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxDistance={12}
          minDistance={5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    
    </Card>
    </>
  )
}
