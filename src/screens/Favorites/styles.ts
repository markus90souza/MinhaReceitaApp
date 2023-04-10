import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 36px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`
