
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavTabs from './NavTabs';

const Header = () => {
    return (
        <header>
            <h2>Jocelin Amaya</h2>
            <nav>
                <NavTabs></NavTabs>
            </nav>
        </header>
    );
};

export default Header;
