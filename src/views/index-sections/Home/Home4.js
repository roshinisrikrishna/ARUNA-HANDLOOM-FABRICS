import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { motion } from "framer-motion";
import CardMedia from '@material-ui/core/CardMedia';
import orvisImage from "assets/img/orvis.webp"; // Import the image
import corridorImage from "assets/img/corridor (1).webp"; // Import the image
import jillImage from "assets/img/jill1 (1).webp"; // Import the image
import unitedcolorImage from "assets/img/scotch 1.png"; // Import the image
import myerImage from "assets/img/myer1.webp"; // Import the image
import talbotsImage from "assets/img/talbots1.webp"; // Import the image


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
    <div className="main-clients">
      <Row className="" style={{  }}>
     
        <Col className="clients-col d-flex align-items-center justify-content-center" lg={4} style={{ backgroundColor: "rgb(235,235,235)", padding: "7% 0% 7% 9%", lineHeight:"1.8em" }}>
          <h1 className="clients-h2" style={{ color: "black", fontFamily: "Raleway, sans-serif", fontSize: "38px", fontWeight: 400, margin: "0",lineHeight:"1.36em" }}>Working With the Best Clients and Partners</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-center clients-row" lg={8} style={{ backgroundColor: "rgb(235,235,235)", padding: "2% 7% 0% 2%" }}>
          <Row className="home4">
            {/* <Col lg={12}> */}
          <Col lg={4}>
       <Card style={{padding:"25% 2%", borderRadius:"0px"}}>
       <CardMedia
        component="img"
        alt="Logo"
        height="100%"
        width="100%" // Set the width to 100%
        image={orvisImage} // Use the imported image
        title="Logo"
      />
       </Card>
     </Col>
      <Col lg={4}>
       <Card style={{padding:"20% 2%", borderRadius:"0px"}}>
       <CardMedia
        component="img"
        alt="Logo"
        height="100%"
        width="90%" // Set the width to 100%
        image={corridorImage} // Use the imported image
        title="Logo"
      />
       </Card>
     </Col>
      <Col lg={4}>
       <Card style={{padding:"25% 2%", borderRadius:"0px"}}>
       <CardMedia
        component="img"
        alt="Logo"
        height="100%"
        width="100%" // Set the width to 100%
        image={jillImage} // Use the imported image
        title="Logo"
      />
       </Card>
     </Col>
     <Col lg={4}>
       <Card style={{padding:"20.9% 4%", borderRadius:"0px"}}>
       <CardMedia
        component="img"
        alt="Logo"
        height="auto"
        width="100%" // Set the width to 100%
        image={unitedcolorImage} // Use the imported image
        title="Logo"
      />
       </Card>
     </Col>
      <Col lg={4}>
       <Card style={{padding:"13.5% 2%", borderRadius:"0px"}}>
       <CardMedia
        component="img"
        alt="Logo"
        height="100%"
        width="100%" // Set the width to 100%
        image={myerImage} // Use the imported image
        title="Logo"
      />
       </Card>
     </Col>
      <Col lg={4}>
       <Card style={{padding:"33% 2%", borderRadius:"0px"}}>
       <CardMedia
        component="img"
        alt="Logo"
        height="100%"
        width="100%" // Set the width to 100%
        image={talbotsImage} // Use the imported image
        title="Logo"
      />
       </Card>
     </Col>
     {/* </Col>  */}
    </Row>
    
       
        </Col>
      </Row>

       
    
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .home4{
          max-width: 95% !important;
          display: flex;
          flex-direction: column;
            align-items: center !important;
            text-align: center !important;

            justify-content: center !important;

        }
        
        .main-clients{
          max-width: 96% !important;
        }
          .clients-h1{
            font-size: 23px !important;
          }
          .clients-p{
            font-size: 18px !important;
            
          }
          .clients-pr{
            font-size: 18px !important;
          }
          .clients-img{
            width: 100% !important;
            
          }
          .clients-h2{
            padding-top: 5% !important;
            font-size: 26px !important;
          }
          .clients-p2{
            font-size: 18px !important;
            max-width: 90% !important;
            text-align: center !important;
          }
          .clients-col{
            display: flex;
          flex-direction: column;
            align-items: center !important;
            text-align: center !important;

            justify-content: center !important;
          }
                 
           }
      @media only screen and (min-width: 767px) and (max-width: 912px) {
        .home4{
          max-width: 99% !important;
          display: flex;
          flex-direction: column;
            align-items: center !important;
            text-align: center !important;

            justify-content: center !important;

        }
        .main-clients{
          max-width: 100% !important;
        }
        .clients-h1{
          font-size: 46px !important;
        }
        .clients-p{
          font-size: 36px !important;
          
        }
        .clients-pr{
          padding-top: 5% !important;
          font-size: 36px !important;
        }
        .clients-img{
          width: 100% !important;
          text-align: center;
          
        }
        .clients-h2{
          padding-top: 5% !important;
          font-size: 48px !important;
        }
        .clients-p2{
          font-size: 36px !important;
          max-width: 90% !important;
          text-align: center !important;
        }
        .clients-col{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
         
            }
      @media only screen and (min-width: 1024px) {
        .main-clients{
          max-width: 98.9% !important;
        }
        .clients-img{
          width: 100% !important;
          height: auto !important;
          
        }
              
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;