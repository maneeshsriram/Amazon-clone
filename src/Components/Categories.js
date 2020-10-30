import React from 'react'
import './Categories.css'

const Categories = ({ title, image }) => {
    return (
        <div className="categories">
            <h2>{title}</h2>
            <img src={image} />
        </div>
    )
}

export default Categories
