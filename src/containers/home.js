import React from 'react'



const Home = () => {

    return (
      <div class="center">
        <p>Hello!</p>
        <p>I'm Moises Trejo :)</p>
        <p>I am from ___</p>
        <p>I like to ___</p>
        <p>I am looking for a role in ___</p>
        <img
          class="image"
          src={process.env.PUBLIC_URL + `/images/headshot.jpg`}
          alt="img"
        ></img>
      </div>
    );
} 

export default Home;