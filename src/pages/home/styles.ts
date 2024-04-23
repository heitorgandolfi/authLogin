import { styled } from "styled-components";

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

export const Button = styled.button`
    cursor: pointer;
    width: 120px;
    height: 42px;

    font-size: 1rem;
    letter-spacing: 0.0625rem;
    font-weight: 500;
    margin-bottom: 1.5rem;

    color: #FFFF;
    background-color: #4285E3;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover {
        opacity: 0.9;
    }
`