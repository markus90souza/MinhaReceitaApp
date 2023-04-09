import { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  Title,
} from './styles'
import { Logo } from '@components/Logo'
import { api } from '@services/api'
import { Food } from '@components/Cards/Food'

type IngredientsData = {
  id: string
  name: string
  amount: string
}

type InstructionsData = {
  id: string
  index: number
  text: string
}

export interface foodData {
  id: string
  name: string
  total_ingredients: string
  time: number
  cover: string
  video: string
  ingredients: IngredientsData[]
  instructions: InstructionsData[]
}
export function Home() {
  const { colors } = useTheme()

  const [search, setSearch] = useState('')

  const [foods, setFoods] = useState<foodData[]>([])

  useEffect(() => {
    const getFoods = async () => {
      const { data } = await api.get('/foods')
      setFoods(data)
    }

    getFoods()
  }, [])

  const handleSearch = () => {}
  return (
    <Container>
      <Logo />
      <Header>
        <Title>Encontre a receita {'\n'}que combina com você</Title>
      </Header>

      <SearchContainer>
        <SearchInput
          placeholder="Digite o nome da comida"
          value={search}
          onChangeText={(search) => setSearch(search)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" color={colors.green500} size={24} />
        </TouchableOpacity>
      </SearchContainer>

      <FlatList
        data={foods}
        renderItem={({ item }) => <Food data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
