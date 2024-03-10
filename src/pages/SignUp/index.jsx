import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, BackGround } from "./styles";

export function SignUp() {
  return (
    <Container>
      <BackGround />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie a sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Button title="Cadastrar"></Button>
        <a href="#">Voltar para o login</a>
      </Form>
    </Container>
  );
}
