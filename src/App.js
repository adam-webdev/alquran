import React, { useState } from 'react'
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import GlobalStyle, { Button, Container } from './globalStyle';


function App() {
 

  return (
    <>
    <GlobalStyle />
    <Container>
    {/* <Button 
    color="white" 
    bottom="16px" 
    top="16px" 
    left="14px" 
    width='100px'
    height="50px"
    right="14px" 
    background="blue"
    border="4px" 
    
    >Sign</Button> */}
    <Header />
    </Container>
    </>
  );
}

export default App;
