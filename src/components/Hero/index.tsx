import Button from '../Button'
import Tag from '../Tag'
import { Game } from '../pages/Home'

import { formataPreco } from '../Product/ProductList'
import { add, open } from '../../store/Reducers/cart'

type Props = {
  game: Game
}

import { Banner, Infos } from './styles'
import { useDispatch } from 'react-redux'

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discont && (
              <span>De {formataPreco(game?.prices.old)} </span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              variante="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}
export default Hero
