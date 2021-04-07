import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Arrow = styled(FaArrowLeft)`
width:${props => props.width ? props.width : '30px'};
height:${props => props.height ? props.height : '30px'};
cursor: pointer;
color:${props => props.color ? props.color : '#fff'};
background:${props => props.background ? props.background : '#31b052'};
padding:8px;
border-radius:50%;
&:hover{
    background:#e1f7e4;
    color:#31b052;
    transition:.4s;
}
`
function ArrowLeft(props){
    const history = useHistory()
    const handleBack = () => {
        history.push('/')
    }

   
    return(
        props.onClick ? <Arrow color={props.color} width={props.width} height={props.height} background={props.background} onClick={props.onClick} /> : <Arrow color={props.color} width={props.width} height={props.height} background={props.background} onClick={handleBack} />
    )
}

export default ArrowLeft