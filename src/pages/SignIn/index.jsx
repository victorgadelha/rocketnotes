import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, BackGround } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça o seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Button title="Entrar"></Button>
        <a href="#">Criar conta</a>
      </Form>
      <BackGround />
    </Container>
  );
}
