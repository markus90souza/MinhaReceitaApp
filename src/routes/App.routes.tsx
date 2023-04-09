import { Ionicons } from '@expo/vector-icons'

import React from 'react'
import { useTheme } from 'styled-components/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Favorites } from '@screens/Favorites'
import { StackRoutes } from './Stack.routes'

const { Screen, Navigator, Group } = createBottomTabNavigator()

const AppRoutes = () => {
  const { colors } = useTheme()

  return (
    <Navigator>
      <Group
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.active,
          tabBarStyle: { backgroundColor: colors.white, borderTopWidth: 0 },
        }}
      >
        <Screen
          name="HomeTab"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return <Ionicons name="home" color={colors.black} size={size} />
              }
              return <Ionicons name="home-outline" color={color} size={size} />
            },
          }}
        />

        <Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <Ionicons name="heart" color={colors.red300} size={size} />
                )
              }
              return <Ionicons name="heart-outline" color={color} size={size} />
            },
          }}
        />
      </Group>
    </Navigator>
  )
}

export { AppRoutes }
