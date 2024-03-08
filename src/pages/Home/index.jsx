import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, NewNote, Content } from "./styles";

import { Header } from "../../components/Header/";
import { Input } from "../../components/Input/";
import { ButtonText } from "../../components/ButtonText/";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive></ButtonText>
        </li>
        <li>
          <ButtonText title="Reactjs"></ButtonText>
        </li>
        <li>
          <ButtonText title="Nodejs"></ButtonText>
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
