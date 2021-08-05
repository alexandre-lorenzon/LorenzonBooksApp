import styled from 'styled-components';
import Constants from 'expo-constants';

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  green: '#10B981',
  red: '#EF4444',
};

const { secondary, tertiary, green, red } = Colors;

export const MessageBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${props => props.tipo == "SUCCESS" ? green : red};
`;

export const MainContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const BookView = styled.View`
  padding-top: 10px;
  flex-direction: row;
  width: 100%;
  
`;

export const BookInformation = styled.View`
  margin-left: 10px;
 
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-color: ${secondary};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;
