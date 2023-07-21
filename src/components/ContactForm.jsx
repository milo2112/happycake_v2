import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{marginTop:'50px'}}>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
  
        
  
        <Button variant="danger" type="submit" style={{color: 'white'}}>
          Enviar
        </Button>
      </Form>
    )

}
export default ContactForm;