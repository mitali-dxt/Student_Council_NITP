import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ComplaintForm from './ComplaintForm';

const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Events', href: '#events' },
    { text: 'Contact', href: '#contact' },
];

const Homepage = () => {
    return (
        <div>
            <Navbar theme="dark" links={links} />
            <header>
                <h1>Welcome to the Student Council</h1>
            </header>
            <main>
                <section id="about">
                    <h2>About Us</h2>
                    <p>Information about the Student Council...</p>
                </section>
                <section id="events">
                    <h2>Upcoming Events</h2>
                    <p>Details about upcoming events...</p>
                </section>
                <ComplaintForm />
            </main>
            <footer>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>Contact information...</p>
                </section>
            </footer>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Homepage />
        </div>
    );
}

export default App;