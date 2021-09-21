import React from "react"


const Cat = ({cat}) => {
    return(
    <div className="cat-container">
      <img src={cat.url} alt={cat.id} className="cat-img"/>
    </div>    
    )
  }
  
  export default Cat;