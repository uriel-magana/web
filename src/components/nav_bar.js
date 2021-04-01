import React from 'react'

import {NavLink} from 'react-router-dom'

import './nav_bar.css'

class NavigationBar extends React.Component {


    render(){

        return <div>
            <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
            </ul>
        </div>
    }

}

export default NavigationBar;