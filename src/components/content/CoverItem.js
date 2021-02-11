import React from 'react'

export default function CoverItem({ text, images }) {
    return (
        <div className="menu-item">
            <img src={images} className="cover-img" alt={text}/>
            <div className="cover-name">{text}</div>
        </div>
    )
}
