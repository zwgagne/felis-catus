import React from "react"

interface Props {
    url: string
}

const CatImage: React.FC<Props> = ({ url }) => {
    return (
        
        <img src={url} />
    
    )
}

export default CatImage;