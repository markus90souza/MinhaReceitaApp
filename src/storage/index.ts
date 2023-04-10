import AsyncStorage from '@react-native-async-storage/async-storage'

const getFavorites = async (favorites: string) => {
  const storage = await AsyncStorage.getItem(favorites)

  return JSON.parse(storage) || []
}

const saveFavorite = async (favorite, newFavorite) => {
  const favorites = await getFavorites(favorite)

  const hasFavorite = favorites.some((item) => item.id === newFavorite.id)

  if (hasFavorite) {
    return
  }

  favorites.push(newFavorite)

  await AsyncStorage.setItem(favorite, JSON.stringify(newFavorite))
}

const removeFavorite = async (id: string) => {
  const receita = await getFavorites('@minhareceita')

  const receitas = receita.filter((item) => item.id !== id)

  await AsyncStorage.setItem('@minhareceita', JSON.stringify(receitas))

  return receitas
}

const isFavorite = async (receita) => {
  const receitas = await getFavorites('@minhareceita')

  const favorite = receitas.find((item) => item.id === receita.id)

  if (favorite) {
    return true
  }

  return false
}

export { getFavorites, removeFavorite, saveFavorite, isFavorite }
