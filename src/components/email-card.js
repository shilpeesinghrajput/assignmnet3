import React from 'react'
import './emailCard.css';

const Emailcard = ({data,handleclick}) => {
    const date = new Date(data.date);
    let formatedD = date.getDate() + '/' +(date.getMonth() + 1) + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();  
    let character = data.from.name[0].toUpperCase();
  return (
    <div className='card'>
    <figure className='avatar'>
    <div><span>{character}</span></div>    
    </figure>
    <div className='details'>
        <div>From: <strong>{data.from.name} &lt;{data.from.email}&gt;</strong></div>
        <div>Subject: <strong>{data.subject}</strong></div>
        <div>{data.short_description}</div>
        <div>{formatedD}</div>
    </div>
    </div>
  )
}

export default Emailcard