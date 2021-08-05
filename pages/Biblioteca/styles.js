import styled from 'styled-components/native';
import {Colors, MainContainer} from '../../components/styles';

export const Container = styled(MainContainer)`
    padding: 25px;
    padding-top: 10px;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${Colors.secondary};
  padding-left: 5px;
  width: 60%;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${Colors.tertiary};
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${Colors.tertiary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.primary};
  font-size: 16px;
`;

export const ListBooks = styled.ScrollView`
`;