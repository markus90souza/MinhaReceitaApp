import { FlatList, Text, View } from 'react-native'

import { Container } from './styles'
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { api } from '@services/api'
import { Food } from '@components/Cards/Food'
type RouteParams = {
  search: string
}

export function Search() {
  const { params } = useRoute()
  const { search } = params as RouteParams

  const [foods, setfoods] = useState([])

  useEffect(() => {
    const getReceitasByName = async () => {
      const { data } = await api(`/foods?name_like=${search}`)

      setfoods(data)
    }

    getReceitasByName()
  }, [search])
  return (
    <Container>
      <Text>{search}</Text>

      <FlatList
        data={foods}
        renderItem={({ item }) => <Food data={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>Nenhum item encontrado</Text>
          </View>
        )}
      />
    </Container>
  )
}
