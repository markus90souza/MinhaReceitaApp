import { Text as MotiText } from 'moti'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 36px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Header = styled.View``

export const Title = styled(MotiText)`
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.gray900};
`
export const SearchContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border-width: 1px;
  border-color: '#ececec';
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const SearchInput = styled.TextInput`
  height: 54px;
  width: 90%;
  max-width: 90%;
`
