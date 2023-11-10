import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Examples() {
  return (
    <div className="contact-home" id="contact" style={{ background:"#303132",color:"#D3D3D3", marginTop:"5%"}}>
      <div className="space-50"></div>
      <Container className="mb-0">
        <Row>
          <Col lg="5"  className="address-column">
           

              <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif",   }}>CORPORATE OFFICE </p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0" }}>New # 34 (Old # 42/13), Kothandaraman</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0", }}>Street, Old Washermenpet,</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0", }}> Chennai - 600021, Tamil Nadu, India.</p>
             
          </Col>
          <Col className="stay-class" lg="4" style={{textAlign:"left"}}>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "5px 0" }}>NEED ASSISTANCE?</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>Call us at </p>
                <p className="p-address ml-5 pl-2" style={{ fontSize: "15px", fontFamily: "Arial, sans-serif", margin: "5px 0", }}>(+91) 9444050248</p>
                <p className="p-address ml-5 pl-2" style={{ fontSize: "15px", fontFamily: "Arial, sans-serif", margin: "5px 0", }}>(+91) 9789089099</p>
                <p className="p-address ml-5 pl-2" style={{ fontSize: "15px", fontFamily: "Arial, sans-serif", margin: "5px 0", }}>(+91) 8897667573</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>Email us at</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>info@arunahf.com</p>

          </Col>
          <Col className="stay-class" lg="3" style={{textAlign:"center"}}>
          <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif",   }}>STAY CONNECTED</p>
          <div className="icons-class" style={{ display: "flex", justifyContent: "center", margin:"20px 0" }}>
          <a href="http://www.linkedin.com/in/aruna-handloom-fabrics-9a1697291" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn style={{ marginRight: "20px", color:"white" }} />
          </a>
          <a href="https://www.instagram.com/arunahandloomfabrics/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{  color:"white" }} />
          </a>

          </div>
          </Col>

        </Row>
        <Container className="mt-5" style={{  maxWidth: "100%", padding: '30px 0 0 0' }}>
  <div className="footer-class" style={{ fontSize: "13px", letterSpacing: "1.5px", fontFamily: "Raleway, sans-serif",  textAlign: 'center' }}>
  © 2023 Aruna Handloom Fabrics. All rights reserved.</div>
</Container>
      </Container>     
*      <style>
        {`
        /* CSS for screen width 280px to 540px */
        /* CSS for screen width 280px to 540px */
@media only screen and (min-width: 280px) and (max-width: 768px) {
  .mb-md-5 {
    margin-bottom: 0!important; /* adjust as necessary */
  }
  
}

        
        /* CSS for screen width 280px to 540px */
        @media only screen and (min-width: 280px) and (max-width: 766px) {
          .contact-home{
            max-width: 100% !important;

          }
          
          .address-column{
            text-align: left !important;
            margin-bottom: 15% !important;
            
          }
          .p-address{
            font-size: 20px !important;
          }
          .stay-class{
            text-align: left !important;
          }
          .footer-class{
            font-size: 12px !important;
            

          }
          .icons-class{
            font-size: 20px !important;
            text-align: left !important;
            align-tems: flex-start !important;
            justify-content: flex-start !important;

          }
          .form-group{
            font-size: 23px !important;

          }
          /* styles.css */
.order-sm-1 {
  order: 1;
}

.order-sm-2 {
  order: 2;
}

.order-sm-3 {
  order: 3;
}

.order-sm-4 {
  order: 4;
}

.order-sm-5 {
  order: 5;
}
.order-sm-6 {
  order: 6;
}
         
         
          
             }
        @media only screen and (min-width: 767px) and (max-width: 912px) {
          .contact-home{
            max-width: 100% !important;

          }
  
          .address-column{
            text-align: left !important;
            margin-bottom: 15% !important;
            
          }
          .p-address{
            font-size: 32px !important;
            max-width: 100% !important;
          }
          .form-group{
            font-size: 48px !important;

          }
          .footer-class{
            font-size: 27px !important;

          }
          .icons-class{
            font-size: 36px !important;
            text-align: left !important;
            align-tems: flex-start !important;
            justify-content: flex-start !important;

          }
          .stay-class{
            text-align: left !important;
            max-width: 100% !important;

          }
          /* styles.css */
.order-sm-1 {
  order: 1;
}

.order-sm-2 {
  order: 2;
}

.order-sm-3 {
  order: 3;
}

.order-sm-4 {
  order: 4;
}

.order-sm-5 {
  order: 5;
}
.order-sm-6 {
  order: 6;
}
         
         
           
              }
        @media only screen and (min-width: 1024px) {
          
       
              }
        `}
      </style>
    </div>
  );
}

export default Examples;
