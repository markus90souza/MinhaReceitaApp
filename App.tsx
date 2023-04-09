import { NavigationContainer } from '@react-navigation/native'
import { Routes } from '@routes/index'
import theme from '@theme/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
