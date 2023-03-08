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
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from './schema';

// Tipagem do nosso formulário
type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
    const navigate = useNavigate();
    // FORMA 1 DE FAZER FORMULÁRIO
    // const [emailUser, setEmailUser] = useState('');
    // const [passwordUser, setPasswordUser] = useState('');

    // FORMA 2 DE FAZER FORMULÁRIO
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    });

    // FORMA 1 DE FAZER FORMULÁRIO
    // function handleSubmitLogin(event: FormEvent) {
    //     event.preventDefault();
    //     if(emailUser.length === 0 || passwordUser.length === 0){
    //         alert('Digita seu e-mail e senha');
    //     } else {
    //         const infoUser = {
    //             email: emailUser
    //         }
    //         localStorage.setItem('@userInformationAccount', JSON.stringify(infoUser));
    //         navigate('/');
    //     }
    // }

    // FORMA 2 DE FAZER FORMULÁRIO
    async function handleSubmitLogin(data: LoginFormInputs) {
        // simular resposta da api
        await new Promise ((resolve) => setTimeout(resolve, 2000))
        localStorage.setItem('@userInformationAccount', JSON.stringify({email: data.email}));
        navigate('/');
    }

    return (
        <ContainerHome>
            <FirstColumn>
                <img src={BackgroundCarPng} alt="" />
            </FirstColumn>
            <ContainerFormLogin>
                <img src={LogoPng} alt="" />
                <FormLogin onSubmit={handleSubmit(handleSubmitLogin)}>
                    <ContainerInput>
                        <label>E-mail</label>
                        {/* FORMA 1 DE FORMULARIO */}
                        {/* <input type="text" onChange={e => setEmailUser(e.target.value)} value={emailUser} /> */}
                        {/* FORMA 2 DE FORMULARIO */}
                        <input 
                            type="text" 
                            {...register('email')}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label>Senha</label>
                        {/* <input type="password" onChange={e => setPasswordUser(e.target.value)} value={passwordUser} /> */}
                        <input type="password" {...register('password')} />
                    </ContainerInput>
                    <ContainerButtons>
                        <ButtonPrimary 
                            type="submit" 
                            title='Entrar' 
                            disabled={isSubmitting}
                        />
                        <p>Primeira vez aqui? <a>Clique aqui</a></p>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
        </ContainerHome>
    )
}