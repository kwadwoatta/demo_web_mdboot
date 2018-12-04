import React, { Component } from 'react';
import { Container, Row, Col } from "mdbreact";
import logo from './logo.png'
import Cardd from './components/card/Card';
import Navbar from './components/navbar/navbar';
import VideoCaro from './components/carousel/videocarousel';
import BasicCaro from './components/carousel/basiccarousel';
import Footer from './components/footer/footer';

class App extends Component {


  render() {
    return (
      

    <div>
    	<Navbar/>
	    <VideoCaro/>
      <div className="App">
         <header className="App-header ">
           <img src={logo} alt="logo" className="App-logo" />
           <h1 className="App-title">Welcome to Your MDB React App</h1>
         </header>
         <p className="mb-2">The application is configured and ready to import our components.</p>
       <button href="https://mdbootstrap.com/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></button>
     </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Cardd/>
            </Col> 
            <Col>
              <p>
                lorem ipsum 
              </p>
            </Col> 
          </Row>
        </Container>
      </div>
      <div>
        <BasicCaro/>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default App;