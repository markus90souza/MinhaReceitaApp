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
import { useNavigation } from '@react-navigation/native'

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

  const { navigate } = useNavigation()

  useEffect(() => {
    const getFoods = async () => {
      const { data } = await api.get('/foods')
      setFoods(data)
    }

    getFoods()
  }, [])

  const handleSearch = () => {
    if (!search) {
      return
    }

    setSearch('')

    navigate('Search', { search })
  }
  return (
    <Container>
      <Logo />
      <Header>
        <Title
          from={{
            opacity: 0,
            translateY: 15,
          }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: 100,
            type: 'timing',
            duration: 600,
          }}
        >
          Encontre a receita {'\n'}que combina com você
        </Title>
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
