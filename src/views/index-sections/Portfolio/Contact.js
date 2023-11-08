import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';


function Examples() {
  return (
    <div id="contact" style={{ background:"#303132",color:"#D3D3D3", marginTop:"5%"}}>
      <div className="space-50"></div>
      <Container className="mb-0">
        <Row>
          <Col lg="8"  className="address-column">
            <Row>
              <Col lg="6">
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif",  }}>CANADIAN OFFICE </p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0" }}>#902, Gazley circle, Milton, Ontario.</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0", }}>Postal Code: L9T 6L7</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0", }}>Phone: +647 - 375 - 3533</p>
              </Col>
              <Col lg="6">

              <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif",   }}>CORPORATE OFFICE </p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0" }}>New # 34 (Old # 42/13), Kothandaraman</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0", }}>Street, Old Washermenpet, Chennai - 600</p>
                <p className="p-address" style={{ fontSize: "15px", fontFamily: "Raleway, sans-serif", margin: "0", }}>021, Tamil Nadu, India.</p>
              </Col>
            </Row>
          </Col>
          <Col className="stay-class" lg="4" md="6" style={{textAlign:"right"}}>
          <p className="p-address" style={{ fontSize: "13px", fontFamily: "Raleway, sans-serif",   }}>STAY CONNECTED</p>
          <div className="icons-class" style={{ display: "flex", justifyContent: "right", margin:"20px 0" }}>
            <FaFacebook style={{ marginRight: "20px" }} />
            <FaTwitter style={{ marginRight: "20px" }} />
            <FaPinterest style={{ marginRight: "20px" }} />
            <FaInstagram />
          </div>

                <p className="p-address" style={{ fontSize: "13px", fontFamily: "Raleway, sans-serif", margin: "5px 0" }}>NEED ASSISTANCE?</p>
                <p className="p-address" style={{ fontSize: "13px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>Call us at +91 9444050248</p>
                <p className="p-address" style={{ fontSize: "13px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>+91 9789089099</p>
                <p className="p-address" style={{ fontSize: "13px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>Email us at</p>
                <p className="p-address" style={{ fontSize: "13px", fontFamily: "Raleway, sans-serif", margin: "5px 0", }}>info@arunahandlooms.com9</p>

          </Col>

        </Row>
        <Container className="mt-5" style={{  maxWidth: "100%", padding: '30px 0 0 0' }}>
  <div className="footer-class" style={{ fontSize: "13px", letterSpacing: "1.5px", fontFamily: "Raleway, sans-serif",  textAlign: 'center' }}>
  © 2023 Aruna Handlooms. All rights reserved.</div>
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
  
          .address-column{
            text-align: left !important;
            margin-bottom: 15% !important;
            
          }
          .p-address{
            font-size: 32px !important;
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
