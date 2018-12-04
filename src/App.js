import React, { Component } from 'react';
import { Container, Row, Col, Button } from "mdbreact";
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
         <Container style={{border:"10px 10px"}}>
            <Row>
              <Col><img src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" style={{width:'11rem', height: '5rem'}} alt="mongodb-logo" className="App-logo" /></Col>
              <Col><img src="https://banner2.kisspng.com/20180711/yfe/kisspng-express-js-node-js-javascript-mongodb-node-js-5b461d28173fc6.1251392115313216400952.jpg" style={{width:'5rem', height: '5rem'}} alt="logo" className="App-logo" /></Col>
              <Col><img src="https://image.flaticon.com/icons/svg/919/919851.svg" style={{width:'5rem', height: '5rem'}} alt="react-logo" className="App-logo" /></Col>
              <Col><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" style={{width:'7rem', height: '5rem'}} alt="node-logo" className="App-logo" /></Col>
            </Row>
         </Container>
         
           {/* <img src="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg" style={{width:'20rem'}} alt="logo" className="App-logo" /> */}
           <h1 className="App-title">Welcome to My Portfolio Site</h1>
         </header>
         <p className="mb-2">Hi, I'm Prince and I'm enthusiastic about JS-related technologies.</p>
       <Button href="https://mdbootstrap.com/react/" target="blank" color="light-blue"><strong>Contact Me!</strong></Button>
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