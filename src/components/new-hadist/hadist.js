import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import { Grid, WrappHeader, WrappMain } from '../../globalStyle'
import ArrowLeft from '../../partials/button-back'

const WrappInput = styled('div')`
    display:flex;
`
const Input = styled('input')`
    height:45px;
    border:1px solid #d1d1d1;
    padding:4px 14px 4px 28px;
    border-radius:25px;
    color:#000;
    width:500px;
    margin-top:100px;
    outline:none;
    ::placeholder{
        color:#d9d9d9;
        font-size:16px;
    }
    &:focus{
        border:1px solid #31b052;
    }
    @media(max-width:600px){
        width:80%;
    }
`
const WrappSearch = styled('div')`
    width:10%;
    padding:4px 14px;
    height:40px;
    background:green;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.1);
    display:flex;
    position:relative;
    align-items:center;
    border:1px solid #d1d1d1;
    cursor:pointer;
`
const Search = styled(AiOutlineSearch)`
    width:24px;
    height:24px;
    position:relative;
    color:blue;
    display:block;
    margin-bottom:100px;
    z-index:999;
`
const ButtonCari = styled('button')`
    width:100px;
    height:35px;
    padding:4px 14px;
    background:#31b052;
    border-radius:2px;
    color:#fff;
    outline:none;
    font-weight:600;
    border:none;
    cursor:pointer;
    margin-top:10px;
    letter-spacing:2px;
    transition:.5s;
    &:hover{
        background:#fff;
        border:#31b052 1px solid;
        color:#31b052;
    }
`
const Card = styled('div')`
    width:100%;
    padding:4px 8px;
    border-radius:4px;
    background:#eaeaea;
    color:#000;
    margin-bottom:10px;
    text-align:center;
`
const Hadist = () => {
    const [Hadist, setHadist] = useState()
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(false)

    
    async function getHadist() {
        try{
        const response = await fetch('http://api.carihadis.com/?q=ilmu', {mode:"no-cors"})
        const result = await response.json()
        setHadist(result.data)
        console.log(result.data)
        }catch(error){
            setError(true)
        } finally{
            setLoading(false)
        }
    }
    useEffect(() =>{
        getHadist()
    },[])
    console.log(Hadist)
        return(
        <>
        <WrappHeader bg="#f8f8f8" color="#000">
            <ArrowLeft />
            <p>Hadist</p>
            <p></p>
        </WrappHeader>
        <WrappMain right="0" left="0">
            <Input placeholder="Cari hadist tentang..." />
            <ButtonCari>Cari</ButtonCari>
        </WrappMain>
        <Grid c_gap="4px" top="140px" t_column="auto auto auto auto auto auto">
            <Card>
                Shahih Bukhari
            </Card>
            
        </Grid>
        </>
        )
}

export default Hadist