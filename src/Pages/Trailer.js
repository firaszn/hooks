import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../Data'

const Trailer = () => {
    const[movie,setMovie]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
    
        const foundMovie=moviesData.find((el)=>el.id===Number(id))
        setMovie(foundMovie)
    }, [id])
    
  return (
    <div>
       
        <iframe width="930" height="523" src={movie.trailer} title={movie.title}frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='allowfullscreen'></iframe>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button onClick={() => navigate(-1)}>Back</Button>
</div>
       </div>
  )
}

export default Trailer