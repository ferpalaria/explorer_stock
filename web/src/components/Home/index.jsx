import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from "../../components/Feature";
import { Header } from "../../components/Header";
import { useAuth } from '../../hooks/auth';
import { USER_ROLES } from '../../utils/roles'

export function Home(){
    const { user } = useAuth();

    const ADMIN = [USER_ROLES.ADMIN].includes(user.role);

    return (
        <Container>
            <Header/>

            <main>
                <Feature title="Produto" icon={FiTag} to="/product" />
                {ADMIN &&
                    <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />}
                {[USER_ROLES.ADMIN, USER_ROLES.SALE].includes(user.role) &&
                    <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />}
               
            </main>
        </Container>
    );
}