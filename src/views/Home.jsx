import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      <h1 className="pt-5" style={{marginTop: '50px'}}>
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices </h6>      
      <img src="https://www.kindpng.com/picc/m/499-4993237_birthday-cake-picsart-hd-png-download.png" alt='birthdaycake' style = {{width: '200px'}} />
    </Container>
  )
}

export default Home
