import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Description = ({movies}) => {
    const[movie,setMovie]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
    
        const foundMovie=movies.find((el)=>el.id===Number(id))
        foundMovie?setMovie(foundMovie):alert('movie not found')
    }, [id,movies])
    
   
    return (
        <div>
          <h1 style={{ color: "white" }}>Here is the Description</h1>
          <h2 style={{ color: "white" }}>{movie.description}</h2>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
    
      
  )
}

export default Description