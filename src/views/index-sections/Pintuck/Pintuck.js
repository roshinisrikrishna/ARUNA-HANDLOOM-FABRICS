import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import CardMedia from '@material-ui/core/CardMedia';

import { motion } from "framer-motion";
import yarnImage from "assets/img/pintucknew4.jpg.png"; // Import the image
import yarn2Image from "assets/img/pintucknew2.jpg.png"; // Import the image
import yarn3Image from "assets/img/pintucks1.png"; // Import the image
import yarn4Image from "assets/img/pintucks_main (1).jpg"; // Import the image
import yarn5Image from "assets/img/pintucknew1.jpg"; // Import the image


import { Link } from "react-router-dom";

// Animation variants for fading in elements
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

function Typography() {
  return (
    <div className="main-approach" id="about-us" style={{maxWidth:"100%"}}>
      <Row style={{  }}>
      
        <Col className="approach-col d-flex align-items-center justify-content-center" lg={5} style={{ backgroundColor: "#FFF", padding: "0% 5% 0% 7%" }}>
          <h1 className="approach-h2" style={{ color: "#D3D3D3", fontFamily: "Raleway, sans-serif", fontSize: "56px", fontWeight: 700, margin: "0", padding: "0",textAlign:"right" }}>Pintuck Fabrics</h1>
        </Col>
        <Col className="sideheading-col d-flex align-items-center justify-content-center" lg={7} style={{ backgroundColor: "#FFF", padding: "18% 5% 4% 13%" }}>
  <p className="approach-p" style={{ 
    color: "#303132", 
    fontSize: "20px", 
    fontWeight: 100, 
    lineHeight: "1.5em", 
    letterSpacing: "0px", 
    fontFamily: "Raleway, sans-serif",
    maxWidth:"85%"
  }}>
Discover the elegance and versatility of pintuck fabrics. These textiles feature delicate gathers created by precisely stitched parallel lines, adding depth and dimension to any project. Whether you're creating a beautiful piece of clothing or a stylish home décor item, pintuck fabrics are the perfect choice for adding that extra touch of sophistication. Explore our collection today and bring your visions to life with the timeless beauty of pintuck fabrics.  </p>
</Col>
<Container  style={{ backgroundColor: "" , justifyContent:"center", alignItems:"center",textAlign:"center"}}>
<Col className="" lg={12} style={{height:"10%"}}>
    <img src={yarnImage} alt="" style={{width:"100%",height:"auto"}} />
 
  
  </Col>
 
  </Container>
  <Container>
  <Row>
  <Col lg={6} style={{marginTop:"4.5%"}}>
  {/* <div style={{display: 'flex'}}>
    <img src={yarn2Image} alt="" style={{width:"55%",height:"auto"}} />
    <img className="ml-1" src={yarn5Image} alt="" style={{width:"43%",height:"auto"}} />
  </div> */}
  <img src={yarn3Image} alt="" style={{width:"100%",height:"auto"}} />

</Col>

    <Col lg={6} style={{marginTop:"4.8%"}} >
      {/* <img src={yarn3Image} alt="" style={{width:"100%",height:"auto"}} /> */}
      <img src={yarn4Image} alt="" style={{width:"92%",height:"auto"}} />


    </Col>
  </Row>
</Container>
<Container>
  <Row>
  <Col lg={7} style={{marginTop:"4.5%"}}>
  {/* <div style={{display: 'flex'}}>
    <img src={yarn2Image} alt="" style={{width:"55%",height:"auto"}} />
    <img className="ml-1" src={yarn5Image} alt="" style={{width:"43%",height:"auto"}} />
  </div> */}
  <img src={yarn2Image} alt="" style={{width:"100%",height:"auto"}} />

</Col>

    <Col lg={5} style={{marginTop:"4%"}} >
      {/* <img src={yarn3Image} alt="" style={{width:"100%",height:"auto"}} /> */}
      <img src={yarn5Image} alt="" style={{width:"90%",height:"auto"}} />


    </Col>
  </Row>
</Container>
<Container>
  <Row style={{justifyContent: 'space-between'}}>
    <Col xs={6} style={{marginTop:"5%",backgroundColor: "" , justifyContent:"flex-start", alignItems:"flex-start",textAlign:"left"}} >
      <Link to="/rotary" className="previous-project-link" style={{fontSize:"20px", fontFamily:"Raleway, sans-serif", fontWeight:400, color:"black"}}>{" < "}Previous Project </Link>
    </Col>
    <Col xs={6} style={{marginTop:"5%",backgroundColor: "" , justifyContent:"flex-end", alignItems:"flex-end",textAlign:"right"}} >
      <Link to="/patch" className="next-project-link" style={{fontSize:"20px", fontFamily:"Raleway, sans-serif", fontWeight:400, color:"black"}}>Next Project {" > "}</Link>
    </Col>
  </Row>
</Container>


      </Row>


    
      <style>
        {`
        
           
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .sideheading-col{
          padding: 13% 5% 4% 13% !important;
        }
        .main-approach{
          margin-top: 45% !important;
        }
        .next-project-link {
          // position: fixed;
          font-size: 20px !important;
          bottom: 0px;
          right: 0px;
          color: black;
          text-decoration: none;
         }
         .previous-project-link {
          // position: fixed;
          bottom: 20px;
          left: 0px;
          color: black;
          text-decoration: none;
         }
        .main-approach{
          max-width: 96% !important;
        }
          .approach-h1{
            font-size: 23px !important;
          }
          .approach-p{
            font-size: 18px !important;
            
          }
          .approach-pr{
            font-size: 18px !important;
          }
          .approach-img{
            width: 100% !important;
            
          }
          .approach-h2{
            padding-top: 5% !important;
            font-size: 26px !important;
          }
          .approach-p2{
            font-size: 18px !important;
            max-width: 90% !important;
            text-align: center !important;
          }
          .approach-col{
            display: flex;
          flex-direction: column;
            align-items: center !important;
            text-align: center !important;

            justify-content: center !important;
          }
                 
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .sideheading-col{
          padding: 13% 5% 4% 13% !important;
        }
        .main-approach{
          margin-top: 30% !important;
        }
        .next-project-link {
          // position: fixed;
          font-size: 30px !important;
          bottom: 0px;
          right: 0px;
          color: black;
          text-decoration: none;
         }
         .previous-project-link {
          // position: fixed;
          bottom: 20px;
          left: 0px;
          font-size: 30px !important;
          color: black;
          text-decoration: none;
         }
        .main-approach{
          max-width: 98% !important;
        }
        .approach-h1{
          font-size: 46px !important;
        }
        .approach-p{
          font-size: 36px !important;
          
        }
        .approach-pr{
          padding-top: 5% !important;
          font-size: 36px !important;
        }
        .approach-img{
          width: 100% !important;
          text-align: center;
          
        }
        .approach-h2{
          padding-top: 5% !important;
          font-size: 48px !important;
        }
        .approach-p2{
          font-size: 36px !important;
          max-width: 90% !important;
          text-align: center !important;
        }
        .approach-col{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
         
            }
      @media only screen and (min-width: 1024px) {
        .main-approach{
          max-width: 98.9% !important;
        }
        .next-project-link {
          // position: fixed;
          bottom: 20px;
          right: 0px;
          color: black;
          text-decoration: none;
         }
         .previous-project-link {
          // position: fixed;
          bottom: 20px;
          left: 0px;
          color: black;
          text-decoration: none;
         }
        .approach-img{
          width: 100% !important;
          height: auto !important;
          
        }
      
        @media only screen and (min-width: 1024px) and (max-width: 1200px){
          .main-approach{
            margin-top: 0% !important;
          }
          .sideheading-col{
            padding: 22% 5% 4% 0% !important;
          }
        }
        @media only screen and (min-width: 1200px) and (max-width: 1300px) {
          .main-approach{
            margin-top: 0% !important;
          }
          .sideheading-col{
            padding: 18% 5% 4% 1% !important;
          }
        }
        @media only screen and (min-width: 1300px) and (max-width: 1400px) {
          .main-approach{
            margin-top: -3% !important;
          }
          .sideheading-col{
            padding: 19% 5% 4% 1% !important;
          }
        }
        @media only screen and (min-width: 1400px)  {
          .main-approach{
            margin-top: 0% !important;
          }
          .sideheading-col{
            padding: 16% 5% 4% 0% !important;
          }
        }       
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;