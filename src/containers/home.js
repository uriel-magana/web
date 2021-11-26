import React from 'react'



const Home = () => {

    return (
      <div class="center">
        <div className="border">
          <h1>Hello! I'm YOUR NAME :)</h1>
          <p>I am from A PLACE SOMEWHERE</p>
          <p>I like to ___</p>
          <p>I am looking for a role in ___</p>
          <p>
            My life story: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Consectetur a erat nam at lectus urna duis convallis
            convallis. Potenti nullam ac tortor vitae purus. Pellentesque
            habitant morbi tristique senectus et netus et. Purus ut faucibus
            pulvinar elementum integer. Nisl tincidunt eget nullam non nisi est.
            Auctor urna nunc id cursus metus. Sodales ut etiam sit amet nisl.
            Neque sodales ut etiam sit amet nisl purus in mollis. Nibh cras
            pulvinar mattis nunc sed blandit libero volutpat. Mattis molestie a
            iaculis at erat pellentesque adipiscing. Nam aliquam sem et tortor
            consequat id. Fames ac turpis egestas maecenas. Ut porttitor leo a
            diam sollicitudin tempor id. At erat pellentesque adipiscing commodo
            elit at. Vel pretium lectus quam id leo in vitae turpis massa.
            Faucibus interdum posuere lorem ipsum.
          </p>
        </div>
        <img
          class="image"
          src={process.env.PUBLIC_URL + `/images/headshot.jpg`}
          alt="img"
        ></img>
        <br />
        <div className="border">
          <h3>My Hobbies</h3>
          <ul>
            <li>Eating</li>
            <li>Cooking</li>
            <li>Repeating step 1 and 2</li>
          </ul>
        </div>
        <div className="border">
          <h3>My classes</h3>
          <ul>
            <li>2.009</li>
            <li>18.600</li>
            <li>6.042</li>
          </ul>
        </div>

        <div className="border">
          <h3>My snacks</h3>
          <img
            class="image"
            src={process.env.PUBLIC_URL + `/images/paleta.jpg`}
            alt="img"
          ></img>
        </div>
      </div>
    );
} 

export default Home;