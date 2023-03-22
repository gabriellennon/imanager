import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { NavBar } from '../../components/NavBar';
import { cardsHome } from '../../utils/dataCard';
import { IUserInfo, IUserReducer } from '../../utils/types';

import {
    ContainerHome,
    ContentTitle,
    ContentBody
} from './styles';

export function Home() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<IUserInfo>()

    // CASO QUEIRA RECUPERAR O STATE DO REDUX
    // const userInfos = useSelector((state: IUserReducer) => state.userReduce)
    // console.log(userInfos);

    function splitName(name: string | undefined) {
        if(name){
            const nameFormated = name.split(' ')
            return nameFormated[0];
        } else {
            return '';
        }
    }

    useEffect(() => {
        const infoUserStorage = localStorage.getItem('@userInformationAccount');

        if(infoUserStorage){
            setUserInfo(JSON.parse(infoUserStorage))
        } else {
            navigate('/login')
        }
    },[])

    return (
        <>
            <NavBar urlImage={userInfo?.imageUser} />
            <ContainerHome>
                <ContentTitle>
                    <h1>Olá, {splitName(userInfo?.name)}</h1>
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