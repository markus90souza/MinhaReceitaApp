import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Details } from '@screens/Details'
import { Home } from '@screens/Home'
import { Search } from '@screens/Search'

const { Group, Navigator, Screen } = createNativeStackNavigator()
export const StackRoutes = () => {
  return (
    <Navigator>
      <Group>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Details"
          component={Details}
          options={{ title: 'Detalhes da receita' }}
        />
        <Screen
          name="Search"
          component={Search}
          options={{ title: 'Veja o que encontramos' }}
        />
      </Group>
    </Navigator>
  )
}
