import './App.css';
import React, { useState ,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import Quiz from './Quiz';
import Learn from './Learn';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';




function App() {
  
  return(
    
    <BrowserRouter>
      
        
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">First Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/quiz">Quiz</Nav.Link>
              <Nav.Link href="/learn">Learn </Nav.Link>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        
        <Route path='/quiz' element={<Quiz />} /> 
        <Route path='/learn' element={<Learn />} /> 

      </Routes>
    </BrowserRouter>
      
        
    
  )
}

export default App;
