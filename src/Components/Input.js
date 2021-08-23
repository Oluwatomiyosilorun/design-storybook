import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 3px;
`

export default function ({type, name, placeholder}){
    return (
        <Input 
        type={type} 
        className="form-control"
        name={name}
        placeholder={placeholder}
        />
    );
};

