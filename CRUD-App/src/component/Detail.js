import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import loader from '../assets/loader.gif';
import { useParams } from 'react-router-dom'


const Detail = () => {
    const [category,setCategory] = useState({});
    const [isLoading,setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [error,setError] = useState('');

    let params = useParams();
    console.log(params.id);


    useEffect(()=>{
        setLoading(true);
        axios.get('http://www.localhost:3000/category/'+params.id)
        .then(res=>{
            setHasError(false);
            console.log(res.data.category);
            setCategory(res.data.category);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
            setHasError(true);
            setError(err.response.data.message);
        })
    },[])




  return (
    <>
    
    {isLoading && <div>
        <img style={{ width: '150px' }} src={loader} alt="loader"/>
      </div>}

    {!hasError && !isLoading && <div>
        <img style={{width:'250px'}} src={category.photo}/>
        <h1>{category.name}</h1>
    </div>}

    {hasError && <div>
          <p style={{color:'red'}}>Error - {error}</p>
      </div>}
    </>
  )
}

export default Detail