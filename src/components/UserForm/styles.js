import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 0;

`
export const Input = styled.input`
    padding: 8px 4px;
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 3px;
    margin-bottom: 8px;
    display: block;
    &[disabled]{
        opacity: 0.3;
    }
    
`
export const Button = styled.button`
    background: #0791e6;
    height: 32px;
    display: block;
    font-weight: 500;
    border-radius: 3px;
    color: white;
    font-weight: 500;
    width: 100%;
    &[disabled]{
        opacity: 0.3;
    }
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
`

export const Error = styled.span`
    font-size: 14px;
    color: red;
`
