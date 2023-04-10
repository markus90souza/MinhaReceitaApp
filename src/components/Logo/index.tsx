import { Container, Name } from './styles'

export function Logo() {
  return (
    <Container
      from={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        type: 'timing',
        duration: 600,
      }}
    >
      <Name>Receita Fácil</Name>
    </Container>
  )
}
