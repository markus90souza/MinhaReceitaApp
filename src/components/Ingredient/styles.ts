import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 6px;
`

export const Name = styled.Text`
  font-weight: 500;
  font-size: 16px;
`

export const Amount = styled.Text``
