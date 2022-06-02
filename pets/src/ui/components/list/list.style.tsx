import {  styled  } from '@mui/material';

export const ListStyled = styled('ul')`

    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(2)};

`;

export const ItemList = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom : ${({theme}) => theme.spacing(5)};
    gap: ${({theme}) => theme.spacing(5)};

    ${({theme}) => theme.breakpoints.down('sm')} {
    
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing(2)};
    margin-bottom : ${({theme}) => theme.spacing(10)};

    };
`;

export const Img = styled('img')`

    width: 100%;


`;

export const Informacoes = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)};
`;

export const Nome = styled('h2')`
    margin: 0;
`;

export const Descricao = styled('p')`

    margin: 0;
    word-break: break-word;

`;
