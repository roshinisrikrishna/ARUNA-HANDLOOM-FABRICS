import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import CardMedia from '@material-ui/core/CardMedia';

import { motion } from "framer-motion";
import yarnImage from "assets/img/Yarn Died1cropped.jpg"; // Import the image
import yarn2Image from "assets/img/Yarn Dyed2.png"; // Import the image
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
      
        <Col className="approach-col d-flex align-items-center justify-content-center" lg={4} style={{ backgroundColor: "#FFF", padding: "7% 5%" }}>
          <h1 className="approach-h2" style={{ color: "#D3D3D3", fontFamily: "Raleway, sans-serif", fontSize: "56px", fontWeight: 700, margin: "0", padding: "0" }}>Yarn Dyed Fabrics</h1>
        </Col>
        <Col className="sideheading-col d-flex align-items-center justify-content-center" lg={8} style={{ backgroundColor: "#FFF", padding: "18% 5% 4% 13%" }}>
  <p className="approach-p" style={{ 
    color: "#303132", 
    fontSize: "20px", 
    fontWeight: 100, 
    lineHeight: "1.5em", 
    letterSpacing: "0px", 
    fontFamily: "Raleway, sans-serif",
    maxWidth:"85%"
  }}>
   Enhance your projects with the durability and depth of yarn-dyed fabrics. These textiles are created by dyeing the yarn before weaving it into fabric, resulting in long-lasting color and a unique marbled effect. Perfect for a variety of applications, from clothing to home décor, yarn-dyed fabrics are a must-have for any crafter or designer. Browse our collection today and elevate your creations with the beauty of yarn-dyed fabrics
    
  </p>
</Col>
<Container  style={{ backgroundColor: "" , justifyContent:"center", alignItems:"center",textAlign:"center"}}>
<Col className="" lg={12} style={{height:"10%"}}>
    <img src={yarnImage} alt="" style={{width:"100%",height:"auto"}} />
 
  
  </Col>
 
  </Container>
  <Container  style={{ backgroundColor: "" , justifyContent:"center", alignItems:"center",textAlign:"center"}}>

  <Col className="" lg={8} style={{marginTop:"5%"}} >
    <img src={yarn2Image} alt="" style={{width:"100%",height:"auto"}} />
  </Col>
  </Container>
  <Container  style={{ backgroundColor: "" , justifyContent:"flex-end", alignItems:"flex-end",textAlign:"right"}}>

{/* <Col className="" lg={1} style={{marginTop:"5%"}} > */}
<Link to="/rotary" className="next-project-link" style={{fontSize:"20px", fontFamily:"Raleway, sans-serif", fontWeight:400, color:"black"}}>Next Project {" > "}</Link>


{/* </Col> */}
</Container>

      </Row>

      <style>
        {`
        
           
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .sideheading-col{
          padding: 5% 5% 4% 13% !important;
        }
        .main-approach{
          margin-top: 34% !important;
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
          padding: 5% 5% 4% 13% !important;
        }
        .main-approach{
          margin-top: 14% !important;
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
        @media only screen and (min-width: 1200px) {
          .main-approach{
            margin-top: 4% !important;
          }
          .sideheading-col{
            padding: 12% 5% 4% 13% !important;
          }
        }   
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;