import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Container,
  Cover,
  PlayContainer,
  Name,
  TotalIngredients,
  Header,
  HeaderContainer,
  InstructionTitle,
  InstructionHeader,
} from './styles'
import { Modal, Pressable, Share } from 'react-native'
import { useLayoutEffect, useState } from 'react'
import { foodData } from '@screens/Home'

import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { Ingredient } from '@components/Ingredient'
import { Video } from '@components/Video'
import { Instruction } from '@components/Instruction'
import { isFavorite, removeFavorite, saveFavorite } from '@storage/index'

type RouteParams = {
  data: foodData
}

export function Details() {
  const [showVideo, setShowVideo] = useState(false)
  const { params } = useRoute()
  const { data } = params as RouteParams
  const navigation = useNavigation()
  const { colors } = useTheme()

  const [favorite, setFavorite] = useState(false)

  const handleOpenVideo = () => {
    setShowVideo(true)
  }

  const handleShareReceipe = async () => {
    try {
      await Share.share({ title: '', url: '', message: '' })
    } catch (error) {}
  }

  const handleToggleFavorite = async (receita) => {
    if (favorite) {
      await removeFavorite(receita.id)
      setFavorite(false)
    } else {
      await saveFavorite('@minhareceita', receita)
      setFavorite(true)
    }
  }

  useLayoutEffect(() => {
    const getIsFavorite = async () => {
      const favorited = await isFavorite(data)
      setFavorite(favorited)
    }

    getIsFavorite()

    navigation.setOptions({
      title: data ? data.name : 'Detalhes da receita',
      headerRight: () => (
        <Pressable onPress={() => handleToggleFavorite(data)}>
          {favorite ? (
            <Entypo name="heart" size={24} color={colors.red500} />
          ) : (
            <Entypo name="heart-outlined" size={24} color={colors.red500} />
          )}
        </Pressable>
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, navigation])

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Pressable onPress={handleOpenVideo}>
        <Cover source={{ uri: data.cover }} />
        <PlayContainer>
          <AntDesign name="playcircleo" size={48} color={'#fafafa'} />
        </PlayContainer>
      </Pressable>

      <HeaderContainer>
        <Header>
          <Name>{data.name}</Name>
          <TotalIngredients>{`Ingredientes (${data.total_ingredients})`}</TotalIngredients>
        </Header>

        <Pressable onPress={handleShareReceipe}>
          <Feather name="share-2" size={24} color={'#121212'} />
        </Pressable>
      </HeaderContainer>

      {data.ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          name={ingredient.name}
          amount={ingredient.amount}
        />
      ))}

      <InstructionHeader>
        <InstructionTitle>Modo de preparo</InstructionTitle>
        <Feather name="arrow-down" size={24} color={colors.white} />
      </InstructionHeader>

      {data.instructions.map((ins, index) => (
        <Instruction key={ins.id} index={index} text={ins.text} />
      ))}

      <Modal
        visible={showVideo}
        animationType="slide"
        style={{ flex: 1, overflow: 'hidden' }}
      >
        <Video handleClose={() => setShowVideo(false)} videoUrl={data.video} />
      </Modal>
    </Container>
  )
}
