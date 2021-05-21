import React from 'react'

export default function Grid(props){
    return(
        <>
<div class="container">
        <div class="youtube">{props.yt}</div>
        <div class="bloco1">{props.img}</div>
        <div class="bloco2">{props.txt1}</div>
    </div>
        </>
    )
}