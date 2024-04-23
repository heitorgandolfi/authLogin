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

    max-width: 440px;
    width: 95%;
    height: 420px;

    background-color: #FFFFFF;
    border-radius: 20px;
    
    h3 {
        color: #101828;
        font-size: 28px;
        font-weight: bold;

        margin: 48px 0 32px 0;
    }

    p {
        font-size: 16px;
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
    margin-bottom: 24px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }

    #email {
        margin-top: 12px;
    }

    label {
        font-size: 16px;
        font-weight: 400;
        color: #344054;
    }

    input {
        padding: 8px 12px;
        font-size: 16px;

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

    font-size: 16px;
    font-weight: 600;
    margin-bottom: 24px;

    color: #FFFF;
    background-color: #1570EF;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover {
        opacity: 0.9;
    }
`