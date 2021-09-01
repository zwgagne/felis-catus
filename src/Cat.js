import { json } from 'body-parser';
import React, { useState } from 'react'

function Cat() {
    const [url, setUrl] = useState('')
    function fetch_data(){
        fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Meeeeeeeeooooow');
        }, networkError=> console.log(networkError.message)).then(jsonRes=>{
            setUrl(jsonRes[0].url)
        })

    }
}
