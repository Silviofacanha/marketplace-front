import Link from "next/link";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import {useRouter} from "next/router";
import { Router } from "react-bootstrap-icons";

export default function Login() {
  const router = useRouter();

  function handleLogin(e){    
    
    //TODO: lógica de login para o sistema
    e.preventDefault();
    router.push("/categorias");
  }
  return (
    <>
      <Container className="p-5">
        <Card>
          <Form onSubmit={handleLogin}>
            <h1 className="text-center">Entrar na sua loja</h1>
            <Form.Group className="p-2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o seu e-mail"
                required
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira a sua senha"
                minLength={8}
                required
              />
            </Form.Group>
            <Form.Group className="p-2 text-center">
              <Button type="submit">Entrar no sistena</Button>
              <br />              
                  <Link href="/nova-conta">
                    <a>Crie uma conta</a>
                  </Link>                          
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}