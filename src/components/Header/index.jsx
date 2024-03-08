import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/victorgadelha" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo,</span>
          <strong>João Victor Gadelha</strong>
        </div>
      </Profile>
    </Container>
  );
}
