import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'


// pages/404.js
export default function Custom404() {

    let router = useRouter()
    useEffect(() => {
        router.replace('/')
    },[])
    return <h1 style={{
        backgroundColor: 'black',
        color: 'white'
    }}></h1>
  }