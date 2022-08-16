import React, {  } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col,  } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContractMe = () => {
  
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contrato</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h2 className="display-4 mb-4">¿Te interesaria contratarme?</h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Si lo que buscas es entrevistarme 
            para un posible empleo, entonces abramos una canal de comunicación 
            directo y rápido, puedes comunicarte conmigo directamente haciendo click en 
            el link debajo y hablaremos via WhatsApp,te contestaré a la brevedad.</h3>
            
            <address>
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                <strong> 
                  <a href={`https://api.whatsapp.com/send?phone=PONTUNUMEROAQUI&text=Hola%20PONTUNOMBREAQUI,%20te%20contacto%20desde%20tu%20web%20quisiera%20hablar%20contigo,%20por%20un%20posible%20empleo,%20espero%20tu%20respuesta.`} >
                  {contactConfig.YOUR_FONE} 
                  </a>
                </strong>{" "} 
                  </p>
              ) : (
                ""
              )}
            </address>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
    
  );
  
};

<div className="menu_footer d-flex flex-column flex-md-row justify-content-center align-items-md-center position-absolute w-100 p-3">
            
          </div>
          ;
