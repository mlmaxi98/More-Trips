import { useSelector } from 'react-redux'
import { HomeDiv } from './StyledHome'
import Loading from '../Loading/Loading'
import Card from './Card/Card'
import Search from './Search'

export const Home = () => {

    //store
    const countries = useSelector(state => state.countries)
    const loading = useSelector(state => state.loading)

    return (
        <HomeDiv>
            <Search />
            <div className='cards'>
                {
                    loading
                        ? <Loading />
                        : countries.length > 0
                            ? countries.map(country =>
                                <Card
                                    key={country.id}
                                    country={country} />)
                            : <span>No se encontraron resultados</span>
                }
            </div>
        </HomeDiv>
    )
}