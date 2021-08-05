import React from 'react';
import {BookView, BookInformation, Avatar, SubTitle, StyledInputLabel} from './styles'

const BookItem = ({id, title, subtitle, thumbnail}) => {
    return (
        <BookView>
            <Avatar resizeMode="cover" source={{uri: thumbnail}}></Avatar>
            <BookInformation>
                <SubTitle>{title}</SubTitle>
                <StyledInputLabel>{subtitle}</StyledInputLabel>
            </BookInformation>
        </BookView>
    );
}

export default BookItem;