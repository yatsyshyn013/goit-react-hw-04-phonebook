import styled from '@emotion/styled'
import {Form} from 'formik';

export const LabelText = styled.div`
    font-size: 20px;

`

export const ButtonForm = styled.button`
    display: block;
    background-color: #fff;
    border: 1px grey solid;
    border-radius: 4px;
    padding: 5px;

    :hover {
        background-color: #337ff8;
        color: #fff;
    }
   
`

export const Label = styled.label`
   
    display: block;
    margin-bottom: 20px;
`
export const FormComponent = styled(Form)`
    border: black 1px solid;
    padding: 20px;
    width: 300px;
`

