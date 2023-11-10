import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import CardMedia from '@material-ui/core/CardMedia';

import { motion } from "framer-motion";
import yarnImage from "assets/img/IKAT1.jpg"; // Import the image
import yarn2Image from "assets/img/IKAT2.jpg"; // Import the image
import yarn3Image from "assets/img/IKAT3.jpg"; // Import the image
import yarn4Image from "assets/img/IKAT3.png"; // Import the image
import yarn5Image from "assets/img/IKAT1.png"; // Import the image



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
      <Row style={{ marginTop:"-10%" }}>
      
        <Col className="approach-col d-flex align-items-center justify-content-center" lg={5} style={{ backgroundColor: "#FFF", padding: "0% 5%" }}>
          <h1 className="approach-h2" style={{ color: "#D3D3D3", fontFamily: "Raleway, sans-serif", fontSize: "56px", fontWeight: 700, margin: "0", padding: "0" }}>IKAT</h1>
        </Col>
        <Col className="sideheading-col d-flex align-items-center justify-content-center" lg={7} style={{ backgroundColor: "#FFF", padding: "27% 5% 4% 13%" }}>
  <p className="approach-p" style={{ 
    color: "#303132", 
    fontSize: "20px", 
    fontWeight: 100, 
    lineHeight: "1.5em", 
    letterSpacing: "0px", 
    fontFamily: "Raleway, sans-serif",
    maxWidth:"85%"
  }}>


Ikat is a traditional textile-making technique characterized by tying and dyeing sections of yarn before they are woven into fabric. The tied sections resist the dye, creating a pattern on the finished cloth. The word "ikat" is derived from the Indonesian and Malaysian word "mengikat," which means "to tie." Ikat textiles are known for their intricate designs and vibrant colors and are used in clothing and home decor items. The technique is widely practiced in several countries, including Indonesia, India, Japan, and South America </p>
</Col>

  <Container>
  <Row>
    
    <Col lg={4} style={{marginTop:"1%"}} >
      <img src={yarn2Image} alt="" style={{width:"100%",height:"auto"}} />
      </Col>
      <Col lg={3} style={{marginTop:"1%", textAlign:""}} >
      <img src={yarnImage} alt="" style={{width:"90%",height:"75%"}} />
    </Col>
      <Col lg={5} style={{marginTop:"1%"}} >

         <img src={yarn3Image} alt="" style={{width:"88%",height:"auto"}} />
    </Col>
    
  </Row>
</Container>

<Container>
  <Row style={{justifyContent: 'space-between'}}>
    <Col xs={6} style={{marginTop:"5%",backgroundColor: "" , justifyContent:"flex-start", alignItems:"flex-start",textAlign:"left"}} >
      <Link to="/patch" className="previous-project-link" style={{fontSize:"20px", fontFamily:"Raleway, sans-serif", fontWeight:400, color:"black"}}>{" < "}Previous Project </Link>
    </Col>
    <Col xs={6} style={{marginTop:"5%",backgroundColor: "" , justifyContent:"flex-end", alignItems:"flex-end",textAlign:"right"}} >
      <Link to="/knit" className="next-project-link" style={{fontSize:"20px", fontFamily:"Raleway, sans-serif", fontWeight:400, color:"black"}}>Next Project {" > "}</Link>
    </Col>
  </Row>
</Container>



      </Row>


    
      <style>
        {`
        
           
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .sideheading-col{
          padding: 10% 5% 4% 13% !important;
        }
        .main-approach{
          margin-top: 47% !important;
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
          padding: 10% 5% 4% 13% !important;
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
            padding: 29% 5% 4% 0% !important;
          }
        }
        @media only screen and (min-width: 1200px) and (max-width: 1300px) {
          .main-approach{
            margin-top: 3% !important;
          }
          .sideheading-col{
            padding: 20% 5% 4% 1% !important;
          }
        }
        @media only screen and (min-width: 1300px) and (max-width: 1400px) {
          .main-approach{
            margin-top: 5% !important;
          }
          .sideheading-col{
            padding: 19% 5% 4% 1% !important;
          }
        }
        @media only screen and (min-width: 1400px)  {
          .main-approach{
            margin-top: 6% !important;
          }
          .sideheading-col{
            padding: 17% 5% 4% 0% !important;
          }
        }          
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;