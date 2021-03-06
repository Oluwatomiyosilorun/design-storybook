import React from 'react'
import styled from 'styled-components'
import { typeScale } from '../utils'
import { Illustrations } from '../assets'
import { useSpring, animated, config} from 'react-spring'
import { PrimaryButton } from './Buttons'


const ModalWrapper = styled.div`
    width: 600px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    postive: relative;
    border-radius: 2px;
`

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`

export const SignUpModal = ({showModal, setShowModal}) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `transitionY(0)` : `transitionX(-200%)`
    });
    
    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt = "Sign up for an account" aria-hidden="true" style={{maxWidth:'380px'}}/>
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>
                <PrimaryButton>Sign Up!</PrimaryButton>
            </ModalWrapper>
        </animated.div>
    )
}