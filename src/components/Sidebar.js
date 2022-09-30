import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

export const Sidebar = () => {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 10rem;
    height: 100vh;
    position: fixed;
    border-right: 2px solid var(--border-color);
    background-color: var(--sidebar-dark-color);

`;
