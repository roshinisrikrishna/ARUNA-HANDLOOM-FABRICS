import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
import { useNavigate } from "react-router-dom";


// core components

function SignUp() {
  const navigate = useNavigate();
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <div className="signup-main" style={{marginTop:""}}>
     <div
  className="section section-signup"
  style={{
    backgroundImage: `url(${require("assets/img/aruna_bg.webp")})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
        <Container>
          <Row>
          <Card className="apparels-card" style={{
        maxWidth: "55%",
        margin: "0 auto", // Center the card horizontally
        textAlign: "center", // Center the text inside the card
        padding: "20px",
        background: "rgba(255, 255, 255, 0.5)",
        fontFamily: "Raleway, sans-serif"
      }}>
        <h2 className="apparels" style={{
          fontFamily: 'Times New Roman, sans-serif',
          fontWeight: 600,
          fontSize: '55px',
          letterSpacing: "0.05em"
        }}>Apparels</h2>
        <Button onClick={()=>navigate('/portfolio')} 
      style={{
        cursor:"pointer",
        ':hover': {
          cursor: 'pointer'
        },
          marginTop:"-2%",
          background: "#2e2e2e",
          borderRadius: "0px",
          color: "white",
          padding: "8px 45px",
          fontSize: "18px",
          fontFamily: "Raleway, sans-serif"

        }}>View Products</Button>
      </Card>
          </Row>
        
        </Container>
      </div>
      <style>
        {`
         /* CSS for screen width 280px to 540px */
         @media only screen and (min-width: 280px) and (max-width: 766px) {
          .signup-main{
            margin-top: 20%;
          }
          .apparels-card{
            padding: 15px;
          }
          .apparels{
            font-size: 36px !important;
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
          .signup-main{
            margin-top: 8%;
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
         @media only screen and (min-width: 1024px) and (max-width: 1200px){
           
          .signup-main{
            margin-top: 8%;
          }
                 
               }
               @media only screen and (min-width: 1200px){
           
                .signup-main{
                  margin-top: 4%;
                  max-width: 100% !important;
                }
                       
                     }
               `}
      </style>
    </div>
  );
}

export default SignUp;
