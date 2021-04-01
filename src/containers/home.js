import React from 'react'



const Home = () => {

    return <div class ="center">
        <h1>Home</h1>
        Hello My name is Moises
        Bananas
        <img class = 'image' src={process.env.PUBLIC_URL+`/images/headshot.jpg`}></img>
    </div>
} 

export default Home;