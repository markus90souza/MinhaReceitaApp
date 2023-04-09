import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.green300};
  height: 48px;
`

export const BackButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 12px;
  font-weight: 500;
  font-size: 18px;
`
