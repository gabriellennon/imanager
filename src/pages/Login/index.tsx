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
import { login } from '../../services/login.service';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/user/reducer';
import toast, { Toaster } from 'react-hot-toast';

// Tipagem do nosso formulário
type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);

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
        setLoading(true)
        // FORMA 1
        // try {
        //     // const response = await login();
        //     const response = await axios.get('http://localhost:5000/login');
        //     console.log(response.data)
        // } catch (error) {
        //     console.log(error)
        // }


        login()
        .then((response) => {
            dispatch(setUser(response.data))
            localStorage.setItem('@userInformationAccount', JSON.stringify(response.data));
            navigate('/');
        })
        .catch((error) => {
            toast.error("Algo deu errado, tente entrar novamente.")
            console.log(error)
            setLoading(false)
        })
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
                            data-testid="input-email"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label>Senha</label>
                        {/* <input type="password" onChange={e => setPasswordUser(e.target.value)} value={passwordUser} /> */}
                        <input type="password" {...register('password')}  data-testid="input-password" />
                    </ContainerInput>
                    <ContainerButtons>
                        <ButtonPrimary 
                            type="submit" 
                            title='Entrar' 
                            disabled={isSubmitting || loading}
                            isLoading={loading}
                        />
                        <p>Primeira vez aqui? <a>Clique aqui</a></p>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </ContainerHome>
    )
}