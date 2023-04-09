import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.green500};
  align-self: flex-start;
  padding: 8px;
  padding-left: 16px;
  padding-right: 18px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 32px;
  margin-bottom: 8px;
`

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`
