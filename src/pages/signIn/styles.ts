import styled from "styled-components";

export const PageContainer = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    height: 100lvh;
    background-image: linear-gradient(
    35deg,
    hsl(239deg 83% 12%) 0%,
    hsl(239deg 84% 13%) 5%,
    hsl(239deg 84% 15%) 41%,
    hsl(239deg 84% 17%) 65%,
    hsl(239deg 84% 18%) 78%,
    hsl(239deg 85% 20%) 87%,
    hsl(239deg 85% 21%) 92%,
    hsl(239deg 85% 23%) 96%,
    hsl(239deg 86% 25%) 98%,
    hsl(239deg 86% 26%) 100%,
    hsl(239deg 86% 28%) 100%,
    hsl(239deg 87% 29%) 100%
    );
`

export const PageContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 500px;
    width: 95%;
    height: 460px;

    background-color: #FFFFFF;
    border-radius: 20px;
    
    h3 {
        color: #101828;
        font-size: 1.75rem;
        font-weight: bold;

        margin: 3rem 0 2.375rem 0;
    }

    p {
        font-size: 1rem;
        color: #98A2B3;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: #1570EF;

        &:hover {
            opacity: 0.8;
        }
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    width: 70%;
`

export const FormFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }

    #email {
        margin-top: 0.75rem;
    }

    label {
        font-size: 1rem;
        font-weight: 400;
        color: #344054;
    }

    input {
        padding: 0.5rem 0.75rem;
        font-size: 1rem;

        border: 1px solid #DCE2E6;
        border-radius: 8px;
        color: #344054;     
        
        &:focus {
            outline: none;
            border: 1px solid #1570EF;
        }
    }
`

export const Button = styled.button`
    cursor: pointer;
    width: 100%;
    height: 42px;

    font-size: 1rem;
    letter-spacing: 0.0625rem;
    font-weight: 500;
    margin-bottom: 1.5rem;

    color: #FFFF;
    background-color: #1570EF;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        cursor: not-allowed;
    }
`

export const ProviderAuthButton = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    width: 70%;
    height: 32px;

    font-size: 0.875rem;
    letter-spacing: 0.0625rem;
    font-weight: 500;
    margin-bottom: 1.5rem;

    border: 1px solid transparent;
    border-radius: 8px;
`