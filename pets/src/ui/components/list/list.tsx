import { Button } from '@mui/material';
import { ListStyled, ItemList, Img, Informacoes, Nome, Descricao } from "./list.style";
import { Pet } from "../../../data/@types/Pet";


interface ListaProps {
    pets: Pet[];
    
}

export default function Lista(props: ListaProps) {
    
    return (
        <div>
            <ListStyled>

                {props.pets.map( pet => 
                    

                    return (
                        <ItemList>
                            <Img src={pet.img} alt={pet.nome} />
                            <Informacoes>

                                <Nome>{pet.nome}</Nome>
                                <Descricao >
                                    {pet.historia}
                                </Descricao>

                                <Button
                                    variant={'contained'}
                                    fullWidth
                                   
                                > Adotar {pet.nome}</Button>

                            </Informacoes>

                        </ItemList>
                    ));
                }


            </ListStyled>




        </div>
    );
}