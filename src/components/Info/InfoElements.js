import styled from 'styled-components'

export const InfoSection = styled.section `
    width: 100%;
`

export const InfoContainer = styled.div `
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px) {
        padding: 25px;
        width: 100%;
    }
`

export const InfoRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const InfoColumnLeft = styled.div `
    width: 500px;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 1200px) {
        order: ${({reverse}) => (reverse ? '1' : '2')};
        width: 100%;
    }
`

export const InfoSpan = styled.p `
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 14px;
    margin-bottom: 10px;
`

export const InfoH1 = styled.h1 `
    font-size: clamp(1.8rem, 100vw, 3rem);
    font-weight: 800;
    margin-bottom: 10px;

    color: ${({color}) => (color ? '#c08511' : '#600406')};
`

export const InfoP = styled.p `

`

export const InfoColumnRight = styled.div `
    width: 650px;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    @media screen and (max-width: 1200px) {
        order: ${({reverse}) => (reverse ? '1' : '2')};
        width: 100%;
    }
`

export const InfoImage = styled.img `
    width: 100%;
    height: 100%;
`