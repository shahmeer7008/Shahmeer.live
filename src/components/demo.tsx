import React, { use, useEffect } from 'react'
import { GrowthTimeline } from './growth-timeline'
import Contact from '@/app/contact/page'
import { useState } from 'react'
interface Props {}

function Demo(props: Props) {
    const {} = props
    const items=["apple"]
    const isAdmin=true
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <>
        <div className='flex'>
            <ul>
                {items.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
            {isAdmin?<Contact/>:<GrowthTimeline/>}

            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="bg-red-500 w-4 h-4" onClick={()=>{setCount(count+1)}}></div>
        </div>
        </>
    )
}

export default Demo

const mongoose=require("mongoose")
const userSchema =new mongoose.Schema({
    name:String,
    age:Number
})
const User=mongoose.model("User",userSchema)    
