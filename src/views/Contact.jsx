import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Container className="text-center">
    <h1 className="pt-5" style={{marginTop: '50px'}}>
      Cuéntanos, ¿en qué te podemos ayudar? 😊
    </h1>
    <ContactForm />
  
    
  </Container>
  )
}

export default Contact