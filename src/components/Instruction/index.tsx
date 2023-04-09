import { ReactNode } from 'react'
import { Text } from 'react-native'

import { Container, Name, Indice } from './styles'

type InstructionsData = {
  index: number
  text: string
}

export function Instruction({ index, text }: InstructionsData) {
  return (
    <Container>
      <Indice>{`${index + 1} -`}</Indice>
      <Name>{text}</Name>
    </Container>
  )
}
