import React from 'react'
import GlobalStyle, { Button, Container } from './globalStyle';


function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
    <Button 
    color="white" 
    bottom="16px" 
    top="16px" 
    left="14px" 
    width='100px'
    height="50px"
    right="14px" 
    background="blue"
    border="4px" 
    
    >Sign</Button>
    </Container>
    </>
  );
}

export default App;
