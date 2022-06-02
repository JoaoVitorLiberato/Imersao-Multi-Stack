import { TituloStyled, SubTitulo } from './title.style';

interface TituloProps {
    titulo: string;
    subtitulo?: string | JSX.Element;
}

export default function Titulo(props: TituloProps) {
    return (
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <SubTitulo>{props.subtitulo}</SubTitulo>
        </>
    );
}