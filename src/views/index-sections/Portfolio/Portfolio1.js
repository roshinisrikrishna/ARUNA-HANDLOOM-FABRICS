import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { motion } from "framer-motion";
import CardMedia from '@material-ui/core/CardMedia';
import { useNavigate } from "react-router-dom";
import yarnImage from "assets/img/Yarn Died1.png"; // Import the image
import rotaryImage from "assets/img/Rotary4.png"; // Import the image
import pintuckImage from "assets/img/Pintuck4.png"; // Import the image
import patchImage from "assets/img/Patchwork1.jpg"; // Import the image
import ikatImage from "assets/img/IKAT7.png"; // Import the image
import KnittedImage from "assets/img/Knitted 1.png"; // Import the image
import Kalamkari1Image from "assets/img/Kalamkari1.png"; // Import the image
import BAKITImage from "assets/img/BAKIT.png"; // Import the image



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
  const navigate = useNavigate();
  return (
    <div className="main-approach">
      <Row style={{ textAlign:"center", justifyContent:"center",alignItems:"center" }}>
      <Col className="approach-col d-flex align-items-center justify-content-center" lg={12} style={{ backgroundColor: "white", padding: "12% 0% 0% 0%" }}>
          <h1 className="approach-h2" style={{ color: "#303132", 
          fontFamily: "Raleway, sans-serif", fontSize: "60px", fontWeight: 800, 
          margin: "0", padding: "0", letterSpacing:"0em" }}> 
            Our Portfolio
            </h1>

        </Col>
               <Col className="approach-col d-flex align-items-center justify-content-center" lg={12} style={{ backgroundColor: "white", padding: "3% 0% 5% 0%" }}>
        <h1 className="approach-h2" style={{ color: "#303132", maxWidth:"60%",lineHeight:"1.5em",
        fontFamily: "Raleway, sans-serif", fontSize: "21px", fontWeight: 400, 
        margin: "0", padding: "0", letterSpacing:"0em" }}>
Welcome to our portfolio. Here you’ll find a selection of our work. Explore our projects to learn more about what we do.</h1>

        </Col>
        
        
       
        <Col className="main-col" lg={12} style={{ backgroundColor: "", padding: "10% 2% 0% 2%", marginBottom:"-20%"  }}>
        <Row className="my-1">
 <Col className="col1-card" lg={4}  style={{}}>
 <Card onClick={()=>navigate('/yarn')} className="hover-card" data-text="Yarn Dyed Fabrics" style={{ borderRadius:"0px", height: '70%' }}>
      <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={yarnImage} // Use the imported image
      />
    </Card>
  </Col>
 <Col className="col2-card" lg={4}  style={{}}>
 <Card className="hover-card" onClick={()=>navigate('/rotary')}  data-text="Rotary Print Garments" style={{ borderRadius:"0px", height: '70%' }}>
       <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={rotaryImage} // Use the imported image
      />
       </Card>
     </Col>
 <Col className="col3-card" lg={4}  style={{}}>
 <Card className="hover-card" onClick={()=>navigate('/pintuck')} data-text="Pintuck Fabrics" style={{ borderRadius:"0px", height: '70%' }}>
       <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={pintuckImage} // Use the imported image
      />
       </Card>
     </Col>
     <Col className="col4-card" lg={4}  style={{}}>
     <Card className="hover-card" onClick={()=>navigate('/patch')} data-text="Patch Work Fabrics" style={{ borderRadius:"0px", height: '60%' }}>
       <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={patchImage} // Use the imported image
      />
       </Card>
     </Col>
 <Col className="col5-card" lg={4}  style={{}}>
 <Card className="hover-card" onClick={()=>navigate('/ikat')} data-text="IKAT" style={{ borderRadius:"0px", height: '60%' }}>
       <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={ikatImage} // Use the imported image
      />
       </Card>
     </Col>
 <Col className="col6-card" lg={4}  style={{}}>
 <Card className="hover-card" onClick={()=>navigate('/knit')} data-text="Knitted Garments" style={{ borderRadius:"0px", height: '60%' }}>
       <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={KnittedImage} // Use the imported image
      />
       </Card>
     </Col>
 <Col className="col7-card" lg={4}  style={{}}>
 <Card className="hover-card" onClick={()=>navigate('/kalamkari')} data-text="KALAMKARI" style={{ borderRadius:"0px", height: '57%' }}>
       <CardMedia
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={Kalamkari1Image} // Use the imported image
      />
       </Card>
     </Col>
 <Col className="col8-card" lg={4}  style={{}}>
 <Card className="hover-card" onClick={()=>navigate('/batik')} data-text="BATIK FABRICS" style={{ borderRadius:"0px", height: '57%' }}>
       <CardMedia className="card-img"
        component="img"
        height="100%"
        width="100%" // Set the width to 100%
        image={BAKITImage} // Use the imported image
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
      @media only screen and (min-width: 280px) and (max-width: 766px) {.main-col{
        max-width: 90% !important;
      }
        .hover-card {
          max-width: 99% !important;
          position: relative;
          overflow: hidden;
          transition: filter 0.3s ease-in-out;
         }
         .col1-card{
          margin-top: -10% !important;
        }
        .col2-card{
          margin-top: -15% !important;
        }
        .col3-card{
          margin-top: -15% !important;
        }
        .col4-card{
          margin-top: -25% !important;
        }
        .col5-card{
          margin-top: -20% !important;
        }
        .col6-card{
          margin-top: -45% !important;
        }
        .col7-card{
          margin-top: -37% !important;
        }
        .col8-card{
          margin-top: -55% !important;
        }
         .hover-card::before {
          content: attr(data-text);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white; /* Set the color to white */
          font-weight: bold; /* Make the text bolder */
          font-size: 28px; /* Increase the font size to 15px */
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
         }
         
         
         .hover-card:hover::before {
          color: white; /* Set the color to white */
          opacity: 1;
         }
         
         .hover-card:hover {
          filter: brightness(80%);
         }
         .hover-card:hover content{
          filter: brightness(100%);
         }
        .main-approach{
          max-width: 96% !important;
          margin-top: 5% !important;
        }
        
        .card-img{
          width: 98% !important;
          padding-left: 4% !important;
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
        .col1-card{
          margin-top: -10% !important;
        }
        .col2-card{
          margin-top: -15% !important;
        }
        .col3-card{
          margin-top: -15% !important;
        }
        .col4-card{
          margin-top: -25% !important;
        }
        .col5-card{
          margin-top: -20% !important;
        }
        .col6-card{
          margin-top: -45% !important;
        }
        .col7-card{
          margin-top: -37% !important;
        }
        .col8-card{
          margin-top: -55% !important;
        }
        .hover-card {
          position: relative;
          overflow: hidden;
          transition: filter 0.3s ease-in-out;
         }
         
         .hover-card::before {
          content: attr(data-text);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white; /* Set the color to white */
          font-weight: bold; /* Make the text bolder */
          font-size: 28px; /* Increase the font size to 15px */
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
         }
         
         
         .hover-card:hover::before {
          color: white; /* Set the color to white */
          opacity: 1;
         }
         
         .hover-card:hover {
          filter: brightness(80%);
         }
         .hover-card:hover content{
          filter: brightness(100%);
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
        .hover-card {
          position: relative;
          overflow: hidden;
          transition: filter 0.3s ease-in-out;
         }
         
         .hover-card::before {
          content: attr(data-text);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white; /* Set the color to white */
          font-weight: bold; /* Make the text bolder */
          font-size: 28px; /* Increase the font size to 15px */
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
         }
         
         
         .hover-card:hover::before {
          color: white; /* Set the color to white */
          opacity: 1;
         }
         
         .hover-card:hover {
          filter: brightness(80%);
         }
         .hover-card:hover content{
          filter: brightness(100%);
         }
        .approach-img{
          width: 100% !important;
          height: auto !important;
          
        }
        .col1-card,.col2-card,.col3-card,.col4-card,.col5-card,.col6-card{
          margin-top: -10% !important;
        }
        .col7-card,.col8-card{
          margin-top: -17% !important;
        }
              
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;