import React, { useState } from 'react'
import './App.css'



function Cat() {
    const [url, setUrl] = useState('')
    function fetch_data(){
        fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Meeeeeeeeooooow');
        }, networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes[0].url)
        })

    }
    return(
         <div className="catCard">
            <img src={url} className="catImg"/>
            <button onClick={fetch_data}>Meow!</button>
        </div>
    )
}
export default Cat