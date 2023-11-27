import ProductList from '../../Product/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetSilutationGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery
} from '../../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: silutationGames } = useGetSilutationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  if (actionGames && fightGames && rpgGames && silutationGames && sportGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title={'Ação'}
          background={'back'}
          id="action"
        />
        <ProductList
          games={sportGames}
          title={'Esportes'}
          background={'gray'}
          id="sports"
        />
        <ProductList
          games={silutationGames}
          title={'Simulação'}
          background={'back'}
          id="simulition"
        />
        <ProductList
          games={fightGames}
          title={'Luta'}
          background={'gray'}
          id="fight"
        />
        <ProductList
          games={rpgGames}
          title={'RPG'}
          background={'back'}
          id="rpg"
        />
      </>
    )
  }
  return <h1>Carregando</h1>
}

export default Categories
