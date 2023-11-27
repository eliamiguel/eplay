import Banner from '../../Banner'
import ProductList from '../../Product/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../../services/api'

export interface GalleryItem {
  type: 'image' | 'Video'
  url: string
}
export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discont?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onseleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onseleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          games={onseleGames}
          title={'Promoções'}
          background={'gray'}
          id={'on-sale'}
        />
        <ProductList
          games={soonGames}
          title={'Em breve'}
          background={'back'}
          id={'coming-soon'}
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
