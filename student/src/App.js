import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ComplaintForm from './ComplaintForm';
import Footer from './Footer';
/*import BackgroundImage from './img/nit.jpg';*/

const links = [
    { text: 'Home', href: '#home' },
    { text: 'Office Bearers', href: '#officeBearers' },
    { text: 'Boards', href: '#boards' },
    { text: 'Calendar', href: '#calendar' },
    { text: 'Feedback', href: '#feedback' },
];

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar theme="dark" links={links} />
            <header className="hero">
                <h1>Student Council</h1>
                <h2>NIT Patna</h2>
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
            <Footer />
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