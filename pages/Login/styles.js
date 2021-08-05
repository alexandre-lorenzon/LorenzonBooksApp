import styled from 'styled-components/native';
import {Colors} from '../../components/styles';


export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.tertiary};
    align-items: center;
`;

export const LogoContainer = styled(Container)`
    margin-top: 40%;
`;

export const AppTitle = styled.Text`
    font-size: 24px;
    margin-top: 40px;
    color: ${Colors.primary};
`;

export const GoogleLoginButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${Colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: ${Colors.primary};
  font-size: 16px;
  padding: 25px;
`;