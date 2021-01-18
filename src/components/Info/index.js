import React from 'react'
import {
    InfoSection,
    InfoContainer,
    InfoRow,
    InfoColumnLeft,
    InfoSpan,
    InfoH1,
    InfoP,
    InfoColumnRight,
    InfoImage
} from './InfoElements'

const Info = ({span, h1, p, img, alt, reverse, color}) => {
    return (
        <InfoSection>
            <InfoContainer>
                <InfoRow>
                    <InfoColumnLeft reverse={reverse}>
                        <InfoSpan>{span}</InfoSpan>
                        <InfoH1 color={color}>{h1}</InfoH1>
                        <InfoP>{p}</InfoP>
                    </InfoColumnLeft>
                    <InfoColumnRight reverse={reverse}>
                        <InfoImage src={img} alt={alt}></InfoImage>
                    </InfoColumnRight>
                </InfoRow>
            </InfoContainer>
        </InfoSection>
    )
}

export default Info
