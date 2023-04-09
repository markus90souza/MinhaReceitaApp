import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(TouchableOpacity)`
  margin-bottom: 16px;
`
export const Cover = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`

export const Info = styled.View`
  position: absolute;
  z-index: 10;
  left: 16px;
  bottom: 16px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`

export const Gradient = styled(LinearGradient)`
  position: absolute;
  height: 55%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 14px;
  background-color: transparent;
`
