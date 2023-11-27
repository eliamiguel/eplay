import Product from '..'
import { Game } from '../../pages/Home'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'back'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductList = ({ title, background, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discont) {
      tags.push(`${game.prices.discont}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }
  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>

        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
              id={game.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
export default ProductList
