import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    position: fixed;
    
    background-color: rgba(14, 38, 61, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-bottom: 1px solid rgb(14, 38, 61);
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border: 0;
        border-radius: 50%;
        overflow: hidden;
        width: 3rem;
        height: 3rem;
        background: var(--dark-300);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        img {
            width: 2.85rem;
            height: 2.85rem;
            border-radius: 50%;
        }
    }
`;

export const ImageLogo = styled.img`
    padding: 5px 8px;
    background: var(--dark-300);
    border-radius: 8px;
`;
