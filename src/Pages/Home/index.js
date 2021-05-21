import React from 'react'
import Grid from '../../components/Grid'

const exibeVideo = () => {
    return (
        <>
<object width="536" height="300">
<param name="movie" value="https://www.youtube.com/watch?v=aPzLQ3j1urs" />
<embed src="https://www.youtube.com/watch?v=aPzLQ3j1urs" type="application/x-shockwave-flash" width="536" height="300" />
</object>
</>
    )
}

function Home(){
    var youtube=  exibeVideo();
    var imagem = "Aqui vai a url de uma Imagem"
    var texto1 = "Bla bla bla bla bla bla"
    var texto2 = "Bla bla bla bla bla bla"

    return (
       <Grid yt={youtube} img={imagem} txt1={texto1} txt2={texto2} />
    )
}

export default Home;