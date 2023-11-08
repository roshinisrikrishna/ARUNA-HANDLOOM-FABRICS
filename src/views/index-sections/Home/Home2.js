import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { motion } from "framer-motion";
import explore1Image from "assets/img/Kalamkariweb.jpg"; // Import the image
import explore2Image from "assets/img/Image.png"; // Import the image
import explore3Image from "assets/img/IKATweb.webp"; // Import the image
import CardMedia from '@material-ui/core/CardMedia';
import { useNavigate } from "react-router-dom";


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
    <div className="main-approach" >
      <Row style={{ textAlign:"center", justifyContent:"center",alignItems:"center" }}>
      <Col className="approach-col d-flex align-items-center justify-content-center" lg={12} style={{ backgroundColor: "white", padding: "5% 0% 0% 0%" }}>
          <h1 className="approach-h2" style={{ color: "black", 
          fontFamily: "Times New Roman, sans-serif", fontSize: "36px", fontWeight: 600, 
          margin: "0", padding: "0", letterSpacing:"0.3em" }}> 
          Our Bestsellers <br />
          <svg className="svg-class" height="1" style={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
          <line x1="0" y1="0" x2="10%" y2="0" stroke="black" strokeWidth="1" />
        </svg>
</h1>

        </Col>
               <Col className="approach-col d-flex align-items-center justify-content-center" lg={12} style={{ backgroundColor: "white", padding: "1% 0% 5% 0%" }}>
        <h1 className="approach-must" style={{ color: "black", fontFamily: "Raleway, sans-serif", fontSize: "19px", fontWeight: 400, margin: "0", padding: "0", letterSpacing:"0.3em" }}>Must-Have Apparel Items
</h1>

        </Col>
        
        
       
        <Col className="home-img-col" lg={3} style={{padding: "0"}}>
        <Card style={{padding: "0", borderRadius:"0px"}}>
  <CardMedia
    component="img"
    alt="Logo"
    height="50%"
    width="100%" // Set the width to 100%
    image={explore1Image} // Use the imported image
    title="Logo"
  />
  <CardText style={{ padding:"5%", fontSize: "16px", fontWeight: 400,fontFamily: "Raleway, sans-serif",color: "white", backgroundColor:"#303132",letterSpacing:"0em" }}>
    KALAMKARI
  </CardText>
</Card>

</Col> 
<Col className="home-img-col"  lg={4} style={{padding: "0"}}>
  <Card style={{ background:"transparent",padding: "0", borderRadius:"0px",boxShadow:"none"}}>
      <CardTitle onClick={()=>navigate('/portfolio')} 
      style={{
        cursor:"pointer",
        ':hover': {
          cursor: 'pointer'
        },
        paddingTop:"20%",
        color: "black", 
        background:"transparent",
        fontFamily: "Times New Roman, sans-serif", 
        fontSize: "52px", 
        fontWeight: 500
        }}>Explore Now</CardTitle>
    <CardMedia className="card-explore2" style={{paddingTop:"4.5%"}}
      component="img"
      alt="Logo"
      height="100%"
      width="100%" // Set the width to 90%
      image={explore2Image} // Use the imported image
      title="Logo"
    />
  </Card>
</Col>
 <Col className="home-img-col"  lg={3} style={{padding: "0"}}>
  <Card style={{padding: "0", borderRadius:"0px"}}>
    <CardMedia
      component="img"
      alt="Logo"
      height="100%"
      width="100%" // Set the width to 100%
      image={explore3Image} // Use the imported image
      title="Logo"
    />
     <CardText style={{padding:"5%",fontSize: "16px", fontWeight: 400, fontFamily: "Raleway, sans-serif",color: "white", backgroundColor:"#303132", letterSpacing:"0em" }}>
    IKAT
  </CardText>
  </Card>
</Col> 



      </Row>

       
    
      <style>
        {`
          
      /* CSS for screen width 280px to 540px */
      @media only screen and (min-width: 280px) and (max-width: 766px) {
        .main-approach{
          max-width: 96% !important;
        }
        .home-img-col{
          max-width: 96% !important;

        }
          .approach-h1{
            font-size: 23px !important;
          }
          .approach-must{
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
        .main-approach{
          max-width: 96% !important;
        }
        .home-img-col{
          max-width: 98% !important;
          

        }
        .svg-class{
          margin-left: 45% !important;
        }
        .approach-h1{
          font-size: 46px !important;
        }
        .approach-must{
          font-size: 38px !important;
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
            @media only screen and (min-width: 1024px) and (max-width: 1200px) {
              .card-explore2{
                padding-top: 2% !important; 
              }
            }
            @media only screen and (min-width: 1200px) and (max-width: 1300px) {
              .card-explore2{
                padding-top: 6% !important; 
              }
            }
            @media only screen and (min-width: 1300px) and (max-width: 1400px) {
              .card-explore2{
                padding-top: 7% !important; 
              }
            }
            @media only screen and (min-width: 1400px)  {
              .card-explore2{
                padding-top: 7.8% !important; 
              }
            }


      @media only screen and (min-width: 1024px) {
        .main-approach{
          max-width: 98% !important;
        }
        .approach-img{
          width: 100% !important;
          height: auto !important;
          
        }
        .svg-class{
          margin-left: 45% !important;
        }
              
            }
      
        `}
      </style>
    </div>
  );
}

export default Typography;