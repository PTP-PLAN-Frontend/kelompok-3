import React from "react";
import { Form, Button } from "react-bootstrap";
import {
Box,
Container,
Row,
Col,
FooterLink,
Heading,
P,
} from "./FooterStyles";

const Footer = () => {
return (
  <Box> 
    <Container>
	  <Row>
	  <Col>
		<Heading>GENERAL</Heading>
		<FooterLink href="/">Home</FooterLink>
		<FooterLink href="/about">About</FooterLink>
		<FooterLink href="/article">Article</FooterLink>
        <FooterLink href="/cultivation">Cultivation</FooterLink>
		<FooterLink href="/simplisa">Simplisia</FooterLink>
		<FooterLink href="/rhizoma">Rhizoma</FooterLink>
	  </Col>
    </Row>
    </Container>

    <Container>
      <br></br>
	  <Row>
    <Col>
      <Form inline>
      <Heading>SIGN UP FOR NEWSLETTER</Heading>
      <P>Receive updates on our lifestyle tips, information on medicinal plants, and more!</P>
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
            Name
        </Form.Label>
        <Form.Control
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="E-Mail"
        />
        <Button type="submit" className="mb-2"
        onClick={() =>
            alert(
              `Thank You!`
            )
          }>
            Submit
        </Button>
      </Form>
    </Col>
	  </Row>
	</Container>
  </Box>
  
);
}

export default Footer;
