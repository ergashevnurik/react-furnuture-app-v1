import React from 'react'
import { NavbarData } from '../../Data/NavbarData'
import {
    NavbarSection,
    NavbarContainer,
    NavbarLogo,
    NavbarUnOrderedList,
    NavbarListItem,
    NavbarLink,
    NavbarInput,
    NavbarButton
} from './NavbarElements'
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo>MENZ</NavbarLogo>
                <NavbarInput></NavbarInput>
                <NavbarButton><FaSearch /></NavbarButton>
                <NavbarUnOrderedList>
                    {NavbarData.map((navbar, index) => (
                        <NavbarListItem key={index}>
                            <NavbarLink to={navbar.link}>{navbar.title}</NavbarLink>
                        </NavbarListItem>
                    ))}
                </NavbarUnOrderedList>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
