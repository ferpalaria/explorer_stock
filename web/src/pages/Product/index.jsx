import { useNavigate } from "react-router-dom";

import { Container, Header, Item } from "./styles";
import { Button } from '../../components/Button';
import { USER_ROLES } from "../../utils/roles";

export function Product() {
  const navigate = useNavigate();

  const products = Array(20)
    .fill({ name: 'Produto' })
    .map((item, index) => (`${item.name} ${index + 1}`));

  const { user } = USER_ROLES;

  return (
    <Container>
      <Header>
        <h1>Produtos</h1>

        <nav>
          {USER_ROLES.ADMIN.includes(user.role) && <Button title="Cadastrar" />}
          <Button title="Voltar" onClick={() => navigate('/')} />
        </nav>
      </Header>

      {
        products.map((product) => (
          <Item key={product}>
            <span>{product}</span>
          </Item>
        ))
      }
    </Container>

  )
}