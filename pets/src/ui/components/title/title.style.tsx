import {  styled  } from '@mui/material';
import theme from '../../themes/themes';

export const TituloStyled = styled('h1')`
    font-size: 20px;
    text-align: center;
    margin-top: ${({theme}) =>  theme.spacing(5)};
`;

export const SubTitulo = styled('h2')`
    font-size: 18px;
    text-align: center;
    margin-bottom: ${({theme}) => theme.spacing(5)};
    color: ${({theme}) => theme.palette.text.secondary};
    
`;