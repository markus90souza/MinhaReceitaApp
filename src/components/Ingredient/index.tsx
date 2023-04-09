import { ReactNode } from 'react'
import { Text } from 'react-native'

import { Container, Name, Amount } from './styles'

interface IngredientProps {
  name: string
  amount: string
}

export function Ingredient({ name, amount }: IngredientProps) {
  return (
    <Container>
      <Name>{name}</Name>
      <Amount>{amount}</Amount>
    </Container>
  )
}
