import React from 'react';

import Directory from '../../components/directory/directory.component';
import { StyledHomePage } from './homepage.styles';
// import './homepage.styles.scss'

const HomePage = () => (
    <StyledHomePage>
        <Directory />
    </StyledHomePage>
);

export default HomePage;