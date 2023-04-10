import { FlatList, Text } from 'react-native'

import { Container, Title } from './styles'
import { useEffect, useState } from 'react'
import { getFavorites } from '@storage/index'
import { useIsFocused } from '@react-navigation/native'
import { Food } from '@components/Cards/Food'

export function Favorites() {
  const [receitas, setReceitas] = useState([])

  const isFocused = useIsFocused()

  useEffect(() => {
    const isActive = true

    const getReceitas = async () => {
      const data = await getFavorites('@minhareceita')

      if (isActive) {
        setReceitas(data)
      }
    }
    if (isActive) {
      getReceitas()
    }
  }, [isFocused])
  return (
    <Container>
      <Title>Receitas Favoritas</Title>

      {receitas.length === 0 && (
        <Title>Nenhuma receita favorita adicionada</Title>
      )}

      <FlatList
        data={receitas}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => <Food data={item} />}
      />
    </Container>
  )
}
