import { foodData } from '@screens/Home'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Details: {
        data: foodData
      }
      Home: undefined
      Favorites: undefined
      Search: undefined
    }
  }
}
