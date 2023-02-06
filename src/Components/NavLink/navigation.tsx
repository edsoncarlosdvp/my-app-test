import { NavLink } from "react-router-dom";
import { Container, Item } from "./navigationStyled";

export const Navigation = (): JSX.Element => {
    return (
        <Container>
            <Item>
                <NavLink to="/">Home</NavLink>
            </Item>
            <Item>
                <NavLink to="cliente">Formulário do Cliente</NavLink>
            </Item>
            <Item>
                <NavLink to="contador">Contador</NavLink>
            </Item>
            <Item>
                <NavLink to="lista">Lista</NavLink>
            </Item>
        </Container>
    )
}