import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { motion } from "framer-motion";

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
    <div className="main-home2" id="about-us">
      <Row style={{  }}>
      <Col className="home2-col d-flex align-items-center justify-content-center" lg={12} style={{ backgroundColor: "rgb(235,235,235)", padding: "1.5% 0%" }}>
          <h1 className="home2-h2" style={{ color: "black", fontFamily: "Raleway, sans-serif", fontSize: "13px", fontWeight: 400, margin: "0", padding: "0", letterSpacing:"0.2em" }}> WORLWIDE LEADERS IN GARMENTS</h1>
        </Col>
        <Col className="home2-col d-flex align-items-center justify-content-center" lg={4} style={{ backgroundColor: "#2e2e2e", padding: "7% 0%" }}>
          <h1 className="home2-h2" style={{ color: "white", fontFamily: "Raleway, sans-serif", fontSize: "56px", fontWeight: 700, margin: "0", padding: "0" }}>Who we are</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-center" lg={8} style={{ backgroundColor: "#2e2e2e", padding: "7% 7% 4% 12%" }}>
  <p className="home2-p" style={{ 
    color: "white", 
    fontSize: "15.5px", 
    fontWeight: 100, 
    lineHeight: "1.8em", 
    letterSpacing: "0px", 
    fontFamily: "Raleway, sans-serif",
  }}>
    Aruna Handloom Fabrics Established in 1989, we are a leading textile manufacturer with a focus on producing high-quality products for our clients.
    We use advanced technology and innovative production methods to create a wide range of textiles, including fabric, clothing, and home textiles.
    Our experienced team works closely with clients to understand their specific needs and provide customized solutions.
    <br /> {/* Add this line */}
    <br />
    <svg className="class-svg" height="1" style={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
      <line x1="0" y1="0" x2="20%" y2="0" stroke="white" strokeWidth="1" />
    </svg>
  </p>
</Col>



      </Row>

       
    
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .main-home2{
          max-width: 96% !important;
        }
        .class-svg{
          display: none;
        }
          .home2-h1{
            font-size: 23px !important;
          }
          .home2-p{
            font-size: 18px !important;
            
          }
          .home2-pr{
            font-size: 18px !important;
          }
          .home2-img{
            width: 100% !important;
            
          }
          .home2-h2{
            padding-top: 5% !important;
            font-size: 22px !important;
          }
          .home2-p2{
            font-size: 18px !important;
            max-width: 90% !important;
            text-align: center !important;
          }
          .home2-col{
            display: flex;
          flex-direction: column;
            align-items: center !important;
            text-align: center !important;

            justify-content: center !important;
          }
                 
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .class-svg{
          display: none;
        }
        .main-home2{
          max-width: 100% !important;
        }
        .home2-h1{
          font-size: 46px !important;
        }
        .home2-p{
          font-size: 36px !important;
          
        }
        .home2-pr{
          padding-top: 5% !important;
          font-size: 36px !important;
        }
        .home2-img{
          width: 100% !important;
          text-align: center;
          
        }
        .home2-h2{
          padding-top: 5% !important;
          font-size: 38px !important;
          text-align: center;

        }
        .home2-p2{
          font-size: 36px !important;
          max-width: 90% !important;
          text-align: center !important;
        }
        .home2-col{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
         
            }
      @media only screen and (min-width: 1024px) {
        .main-home2{
          max-width: 98.9% !important;
        }
        .home2-img{
          width: 100% !important;
          height: auto !important;
          
        }
        .class-svg{
          margin-left: 40%;
        }
              
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;