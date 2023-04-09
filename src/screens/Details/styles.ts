import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

export const Container = styled(ScrollView)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`

export const Cover = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 16px;
`

export const PlayContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Header = styled.View``

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
  margin-top: 16px;
`
export const TotalIngredients = styled.Text`
  font-size: 16px;
  margin-bottom: 14px;
`
export const InstructionHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.green300};
  flex-direction: row;
  padding: 8px;
  border-radius: 6px;
`

export const InstructionTitle = styled.Text`
  font-size: 18px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.white};
`
