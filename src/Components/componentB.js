import React, {useState} from 'react'
import styled from 'styled-components'
import { typeScale } from '../utils'
import { Illustrations } from '../assets'
import { useSpring, animated, config} from 'react-spring'
import { PrimaryButton,TertiaryButton } from './Buttons'
import Input from './Input'

const Container = styled.div`
    box-sizing:border-box;
    position: relative;
    width: 100%;
    display: flex;
`
const ContainerRow = styled.div`
    width: 50%;
    padding-left: 25px;
`

const ContainerRow2 = styled.div`
    width: 35%;
`

const Form = styled.div`

`

const ButtonSet = styled.div`
    margin-top: 55px;
`

const TitleHeader = styled.h3`
    font-size: ${typeScale.header3};
    width: 100%;
    font-weight: bold;
    padding-left:20px;
`

const SignUpText = styled.p`
    font-size: ${typeScale.helperText};
    max-width: 70%;
    text-align: center;
`

function componentB(props) {
    const clickme = (e) => {
        e.preventDefault();
        props.setActive("one")
        console.log("yes")
    }
    return (
       <>
            <TitleHeader>Log In</TitleHeader>
            <Container>
                <ContainerRow>
                    <Form className="form-horizontal">
                        <div className="form-group">
                            <label>Email</label>
                            <Input 
                            type="text" 
                            name="email"
                            placeholder="Email"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <Input type="password" 
                            name="password"
                            placeholder="Password"/>
                        </div>

                        <SignUpText className="text-left">Forgot Password?? </SignUpText>

                        <ButtonSet className="form-group">
                            <TertiaryButton>Signup</TertiaryButton>
                            <PrimaryButton onClick={(e) => clickme(e)}>Login Up!</PrimaryButton>     
                        </ButtonSet>
                    </Form>
                </ContainerRow>

                <ContainerRow2>
                    <img src={Illustrations.SignUpImg} alt = "Sign up for an account" aria-hidden="true" style={{maxWidth:'300px'}}/>
                </ContainerRow2>

            </Container>
       </>
    );
}

export default componentB;