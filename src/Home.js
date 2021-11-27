import React from 'react'
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';

function Home() {
    return (
        <div>
            <Title title_page="About"/>
            <p>Hi there! My name is Stanislav Berger and I make this project for learning of React Dev Tools.</p>
            <p>This project has different ways to use form:</p>
            <ul>
                <li>Realtime Changer</li>
                <li>Changer on click</li>
            </ul>
            <p>and many more.</p>
            <p>I hope you enjoy to see my project.</p>
        </div>
    )
}

export default Home
