import { FormEvent, useState } from 'react';
import BackgroundCarPng from '../../assets/images/backgroundCar.png';
import LogoPng from '../../assets/icons/logo.png';
import { 
    ContainerHome,
    FirstColumn,
    ContainerFormLogin,
    FormLogin,
    ContainerInput,
    ContainerButtons,
} from './styles';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { useNavigate } from "react-router-dom";

export function Login() {
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const navigate = useNavigate();

    function handleSubmitLogin(event: FormEvent) {
        event.preventDefault();
        if(emailUser.length === 0 || passwordUser.length === 0){
            alert('Digita seu e-mail e senha');
        } else {
            console.log('teste')
            const infoUser = {
                email: emailUser
            }
            localStorage.setItem('@userInformationAccount', JSON.stringify(infoUser));
            navigate('/');
        }
    }

    return (
        <ContainerHome>
            <FirstColumn>
                <img src={BackgroundCarPng} alt="" />
            </FirstColumn>
            <ContainerFormLogin>
                <img src={LogoPng} alt="" />
                <FormLogin onSubmit={handleSubmitLogin}>
                    <ContainerInput>
                        <label>E-mail</label>
                        <input type="text" onChange={e => setEmailUser(e.target.value)} value={emailUser} />
                    </ContainerInput>
                    <ContainerInput>
                        <label>Senha</label>
                        <input type="password" onChange={e => setPasswordUser(e.target.value)} value={passwordUser} />
                    </ContainerInput>
                    <ContainerButtons>
                        <ButtonPrimary 
                            type="submit" 
                            title='Entrar' 
                        />
                        <p>Primeira vez aqui? <a>Clique aqui</a></p>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
        </ContainerHome>
    )
}