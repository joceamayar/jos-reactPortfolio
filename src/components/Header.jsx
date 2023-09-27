
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavTabs from './NavTabs';

const Header = () => {
    return (
        <header>
            <h1>Jocelin Amaya</h1>
            <nav>
                <NavTabs></NavTabs>
            </nav>
        </header>
    );
};

export default Header;
