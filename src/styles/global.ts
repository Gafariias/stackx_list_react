import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
       --background: #0D051C; 
       --white: #FFF;
       --white-400: #EDEDED;
       --white-600: #F0F0F0;

       --grey-300: #C6C6D3;
       --grey-400: #a1a1aa;

       --dark-300: #3F3F46;
       --dark-400: #0E263D;
       --dark-500: #515E61;
       --dark-600: #18111F;
       
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
    }

    body, input, textarea, button {
        font-family: 'inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialised;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: 1rem;
        color: white;

        background-color: rgba(14, 38, 61, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 2px solid rgb(14, 38, 61);
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter .2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 100ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;
    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
    }
`;