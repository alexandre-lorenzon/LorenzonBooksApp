import React, {useState} from 'react';
import {Container, SearchContainer, StyledTextInput, StyledButton, ButtonText, ListBooks} from './styles';
import {GoogleBooksService} from '../../services/googleBooksService';
import BookItem from "../../components/BookItem";
import { BookView } from '../../components/styles';

const Biblioteca = () => {

    const [textSearch, setTextSearch] = useState("");
    const [booksResult, setBooksResult] = useState([]);

    handleSearch = () =>{
        GoogleBooksService.SearchBooks(textSearch)
        .then((response) => {
            setBooksResult(response.data.items);
        })
        .catch((error) => {
            console.log(error);
         });
    };

    return (
        <Container>
            <SearchContainer>
                <StyledTextInput 
                    placeholder="Pesquise por palavras chaves"
                    value={textSearch}
                    onChangeText={setTextSearch}
                />
                <StyledButton onPress={handleSearch}>
                    <ButtonText>Buscar livros</ButtonText>
                </StyledButton>
            </SearchContainer>
            <ListBooks>
                {booksResult.map(book => (                    
                    <BookItem
                        id={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle ? book.volumeInfo.subtitle : ''}
                        thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : null}
                    />
                ))}
            </ListBooks>
        </Container>
    );
};

export default Biblioteca;