import React, {useState} from 'react'
import styled from 'styled-components'
import { typeScale } from '../utils'
import { Illustrations } from '../assets'
import { useSpring, animated, config} from 'react-spring'
import { PrimaryButton } from './Buttons'
import ComponentA from './componentA'
import ComponentB from './componentB'

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

export const SignUpModal = ({showModal, setShowModal}) => {
    const [active , setActive] = useState("one");
   
    let showPage;
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `transitionY(0)` : `transitionX(-200%)`
    });


    switch(active) {
        case "one":
           showPage = <ComponentA setActive={setActive} />
          break;
        case "two":
          showPage = <ComponentB setActive={setActive} />
          break;
        default:
         showPage = <ComponentA />
      }
    
    return (
        <animated.div style={animation}>
            <ModalWrapper>
                {showPage}
            </ModalWrapper>
        </animated.div>
    )
}