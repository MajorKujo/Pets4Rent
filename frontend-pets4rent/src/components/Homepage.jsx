import React from 'react'
import './Components.css'

const Homepage = () => {
  return (
    <div>
      <div style={{
          width: '100%', 
          height: '1000px', 
          backgroundImage: "url('https://goofytails.com/cdn/shop/files/labrador-retriever_1000x.jpg?v=1701077639')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white', 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          margin: 'auto'
        }}>
       <h1 className='heading-secondary' style={{color:'white',textAlign: 'center' }}>
        Welcome to Pets4Rent!! 
      </h1>
      <br/><br/>
      <h4 className='heading-secondary' style={{color:'white',textAlign: 'center' }}>
        Here you can find your perfect pet companion
      </h4>
      </div>
    </div>
  )
}

export default Homepage
