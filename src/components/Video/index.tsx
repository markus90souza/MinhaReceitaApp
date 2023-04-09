import { WebView } from 'react-native-webview'
import { BackButton, BackButtonTitle, Container } from './styles'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
interface VideoProps {
  handleClose: () => void
  videoUrl: string
}

export function Video({ handleClose, videoUrl }: VideoProps) {
  const { colors } = useTheme()
  return (
    <Container>
      <BackButton onPress={handleClose}>
        <Feather name="arrow-left" size={24} color={colors.white} />
        <BackButtonTitle>Voltar</BackButtonTitle>
      </BackButton>
      <WebView style={{ flex: 1, width: '100%' }} source={{ uri: videoUrl }} />
    </Container>
  )
}
