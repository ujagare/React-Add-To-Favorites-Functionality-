import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const data = [
    {image:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1481162854517-d9e353af153d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1514533212735-5df27d970db0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1517524365899-2b96b751f85d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1588083066783-8828e623bad7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1514533212735-5df27d970db0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1517524365899-2b96b751f85d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1588083066783-8828e623bad7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1481162854517-d9e353af153d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},
    {image:"https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mahi Way",artist:"Sonu Nigam",added:false},

  ]
  const [val,setVal] = useState(data)
  const handelClick = (index)=>{
      setVal((prev)=>{
      return  prev.map((item,itemindex)=>{
        if(itemindex === index) return {...item,added: !item.added};
           return item
        })
      })
  }
  return (
    <div className='w-full h-screen bg-teal-950'>
      <Navbar data = {val}/>
      <div className='px-14 py-6 flex gap-14 flex-wrap shrink-0'>
      {val.map((obj,index)=>{
        return <Card data = {obj} handelClick={handelClick} index = {index} key={index}/>
      })}
      
      </div>
    </div>
  )
}

export default App
