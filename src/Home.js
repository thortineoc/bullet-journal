import React from 'react';
import './css/Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="home__title">Bullet journal</h1>
            <p className="home__description">
            Welcome on this page! It's your own online bullet journal. Maybe you're wondering what 
            does "Bullet journal" mean. Bullet journals are paper notebooks where you can note all your plans, ideas, dreams.
            It helps you to organize your day, month or whole year. You can feel free and write here about everything that is on your
            mind. The orgins of it's name comes from the most popular pattern of pages in this notebook - bullets. I want to make you
            feel free to make your notes and help you to become better organized with my page. Enjoy it and get the most out of it!
            </p>
            <p className="home__description">
            You can navigate this page using navbar at the top. Calendar allows you to save comming up events and helps with remebering
            important dates. Our to-do list and daily tracker will help you with getting track of everyday task and your daily routine.
            You can also make loose notes with the notepad. You are going to become more organized and won't forget about anything  
            <span role="img" aria-label="smile"> 😉 </span>
            </p>
        </div>
    )
}

export default Home;
