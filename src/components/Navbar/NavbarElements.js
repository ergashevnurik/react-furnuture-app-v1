import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const NavbarSection = styled.nav `
    width: 100%;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(-225deg, #c08511 50%, #600406 50%);
        height: 5px;
        width: 100%;
    }
`

export const NavbarContainer = styled.div `
    width: 1200px;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justy-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    padding: 10px;
`

export const NavbarLogo = styled(Link) `
    margin-right: auto;
    color: #000;
    font-size: 40px;
    text-decoration: none;
`

export const NavbarUnOrderedList = styled.ul `
    display: flex;
    flex-wrap: wrap;
    justy-content: center;
    align-items: center;

    list-style: none;

    padding: 10px;
`

export const NavbarListItem = styled.li `

`

export const NavbarLink = styled(Link) `
    padding: 12px 20px;

    text-decoration: none;
    color: #000;

`

export const NavbarInput = styled.input `
    padding: 5px;

    border: 0;
    outline: 0;
    border-bottom: 2px solid black;
`

export const NavbarButton = styled.button `
    border-radius: 50%;
    outline: none;
    border: none;
    color: #000;
    box-shadow: 2px 2px 0 0 rgba(0,0,0,0.3);
    padding: 10px 10px 10px 10px;
    font-size: 14px;
`