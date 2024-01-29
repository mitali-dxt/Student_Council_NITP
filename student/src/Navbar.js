import React from 'react';

const Navbar = (props) => {
    const { theme, links } = props;

    return (
        <nav className={theme}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;