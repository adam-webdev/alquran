import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Arrow = styled(FaArrowLeft)`
width:18px;
height:18px;
cursor: pointer;
color:${props => props.color ? props.color : '#31b052'};
padding:5px;
&:hover{
    background:${props => props.background ? props.background : '#e1f7e4'};
    color:${props => props.color ? props.color : '#31b052'};
    border-radius:50%;
    transition:.4s;
}
`
function ArrowLeft(props){
    const history = useHistory()
    const handleBack = () => {
        history.push('/')
    }

   
    return(
        props.onClick ? <Arrow onClick={props.onClick} /> : <Arrow onClick={handleBack} />
    )
}

export default ArrowLeft