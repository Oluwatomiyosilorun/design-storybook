import React, {useState} from 'react'
import styled from 'styled-components'
import { typeScale } from '../utils'
import { Illustrations } from '../assets'
import { useSpring, animated, config} from 'react-spring'
import { PrimaryButton } from './Buttons'

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`

function componentA(props) {
    const clickme = (e) => {
        e.preventDefault();
        props.setActive("two")
        console.log("yes")
    }
    return (
        <>
        <img src={Illustrations.SignUp} alt = "Sign up for an account" aria-hidden="true" style={{maxWidth:'380px'}}/>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>
            <PrimaryButton onClick={(e) => clickme(e)}>Sign Up!</PrimaryButton>
    </>
    );
}

export default componentA;

