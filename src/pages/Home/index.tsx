import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { NavBar } from '../../components/NavBar';
import { cardsHome } from '../../utils/dataCard';

import {
    ContainerHome,
    ContentTitle,
    ContentBody
} from './styles';

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const infoUserStorage = localStorage.getItem('@userInformationAccount');

        if(infoUserStorage){
            console.log(infoUserStorage)
        } else {
            navigate('/login')
        }
    },[])

    return (
        <>
            <NavBar />
            <ContainerHome>
                <ContentTitle>
                    <h1>Olá, Gabriel</h1>
                    <p>O que deseja acessar? Escolha abaixo</p>
                </ContentTitle>
                <ContentBody>
                    {cardsHome.map(card => (
                        <Card key={card.id} title={card.title} description={card.description} goToUrl={card.goTo} />
                    ))}
                </ContentBody>
            </ContainerHome>
        </>
    )
}