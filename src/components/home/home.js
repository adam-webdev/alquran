import React from 'react'
import styled from 'styled-components'
import { Card, WrappMain } from '../../globalStyle'
function Home(){
  
   
    const Text = styled('h1')`
        font-size:20px;
    `
    const Title = styled('h5')`
        font-size:14px;
        color:#b1b1b1;
    `
    return(
        <>
            <WrappMain>
                <Title>Waktu Sholat</Title>
                <Card>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                </Card>
            </WrappMain>
    
        </>
    )
}
export default Home