import { NavLink } from 'react-router-dom';
import { House, CurrencyCircleDollar, Package  } from '@phosphor-icons/react';
import LogoPng from '../../assets/icons/logo.png'
import {
    HeaderNav,
    ContentLinks,
    ContentImageUser,
    LogoIManager
} from './styles';

export const NavBar = () => {
    return (
        <HeaderNav>
            <ContentLinks>
                <LogoIManager src={LogoPng} alt="" />
                <nav>
                    <NavLink to="/" title="Home" >
                        <House size={16} color="#50555A" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/vendas" title="Vendas" >
                        <CurrencyCircleDollar size={16} color="#50555A" />
                        <span>Vendas</span>
                    </NavLink>
                    <NavLink to="/estoque" title="Estoque" >
                        <Package size={16} color="#50555A" />
                        <span>Estoque</span>
                    </NavLink>
                </nav>
            </ContentLinks>
            <ContentImageUser>
                <img src="https://github.com/gabriellennon.png" alt="" />
            </ContentImageUser>
        </HeaderNav>
    )
}