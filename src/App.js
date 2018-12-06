import React, { Component } from 'react';
import { Button, Animation, Container, Row, Col } from "mdbreact";
import Navbar from './components/navbar/navbar';
import VideoCaro from './components/carousel/videocarousel';
import Footer from './components/footer/footer';
import Reactlogo from './icons/react-brands.svg';
import MongodbLogo from './icons/mongodb.svg';
import ExpressLogo from './icons/expressjs-ar21.svg';
import NodeLogo from './icons/nodejs-icon.svg';

class App extends Component {


  render() {
    return (
      

    <div>
    	<Navbar/>
	    <VideoCaro/>
      <div className="App">
         <header className="App-header ">
         
           {/* <img src="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg" style={{width:'20rem'}} alt="logo" className="App-logo" /> */}
           <h1 className="App-title">Welcome to My Portfolio Site</h1>
           
         </header>
         <p className="mb-2">Hi, I'm human <span role="img" aria-label="smile">😊</span> and I'm enthusiastic about JS technologies.</p><br/>
       <Animation type="pulse" infinite>
          <Button href="#!" target="blank" color="black" outline className='button'><strong>Lemme tell you more</strong></Button>
       </Animation><br/>
       <Container style={{margin: '5vh'}}>
            <Row>
              <Col><img src={MongodbLogo} style={{width:'10vw', height: '5vw'}} alt="mongodb-logo" className="App-logo" /></Col>
              <Col><img src={ExpressLogo} style={{width:'10vw', height: '5vw'}} alt="express-logo" className="App-logo" /></Col>
              <Col><img src={Reactlogo} style={{width:'10vw', height: '5vw'}} alt="react-logo" className="App-logo" /></Col>
              <Col><img src={NodeLogo} style={{width:'10vw', height: '5vw'}} alt="node-logo" className="App-logo" /></Col>
            </Row>
         </Container>
     </div>
      <Footer/>
    </div>
    );
  }
}

export default App;