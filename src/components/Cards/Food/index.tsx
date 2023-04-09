import { TouchableOpacityProps } from 'react-native'
import { Container, Cover, Gradient, Info, Subtitle, Title } from './styles'
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

interface foodData {
  id: string
  name: string
  total_ingredients: string
  time: number
  cover: string
  video: string
  ingredients: IngredientsData[]
  instructions: InstructionsData[]
}

interface FoodProps extends TouchableOpacityProps {
  data: foodData
}

export function Food({ data, ...rest }: FoodProps) {
  const { navigate } = useNavigation()
  const handleFoodDetail = (data: foodData) => {
    navigate('Details', { data })
  }

  return (
    <Container
      {...rest}
      activeOpacity={0.7}
      onPress={() => handleFoodDetail(data)}
    >
      <Cover source={{ uri: data.cover }} />
      <Info>
        <Title>{data.name}</Title>
        <Subtitle>{`${data.total_ingredients} Ingredientes | ${data.time}Min`}</Subtitle>
      </Info>

      <Gradient
        colors={['transparent', 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.95)']}
      />
    </Container>
  )
}
