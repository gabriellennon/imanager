import styled from "styled-components";

export const ContainerHome = styled.div`
    background: var(--background-login);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const FirstColumn = styled.div`
    width: 70%;
`;

export const ContainerFormLogin = styled.div`
    width: 30%;
    padding: 0 1.875rem;
`;

export const FormLogin = styled.form``;

export const ContainerInput = styled.div`
    margin: 1rem 0;

    label {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.1875rem;
        color: var(--blue-700);
    }

    input {
        margin-top: 0.4375rem;
        background: #FFFFFF;
        border: 1px solid var(--grey-300);
        width: 100%;
        padding: 0.5rem 0.75rem;
    }
`;

export const ContainerButtons = styled.div`
    margin-top: 3.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
