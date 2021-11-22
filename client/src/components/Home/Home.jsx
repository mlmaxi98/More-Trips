import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HomeDiv } from './StyledHome'
import { Ordenamiento } from './Ordenamiento'
import Loading from '../Loading/Loading'
import Card from './Card/Card'
import { Filtros } from './Filtros'
export const Home = () => {

    const countries = useSelector(state => state.countries)
    const loading = useSelector(state => state.loading)
    const [filtro, setFiltro] = useState(false)
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [continent, setContinent] = useState('')
    const [temp, setTemp] = useState('')
    const [dur, setDur] = useState('')
    const [dif, setDif] = useState('')
    const [order, setOrder] = useState('')
    const [page, setPage] = useState(0);
    const [max, setMax] = useState(24);
    const [paises, setPaises] = useState([])
    const nextPage = () => { page < max && setPage(page + 1) }
    const prevPage = () => { page > 0 && setPage(page - 1) }
    const handleReset = () => {
        setContinent('')
        setOrder('')
        setTemp('')
        setPage(0)
        setDif('')
        setDur('')
    }
    const handleClickInput = () => setPage(0)
    const handleClickSearch = () => {
        handleReset()
        setSearch(name);
        setMax(countries.length)
    }
    const handleFilter = (paises, continente, orden, temporada, pagina, dificultad, duracion) => {

        let filteredPaises = paises;

        filteredPaises = Filtros(filteredPaises, continente, temporada, dificultad, duracion)

        filteredPaises = Ordenamiento(filteredPaises, orden)

        filteredPaises.length > 10 ? setMax(Math.ceil(filteredPaises.length / 10) - 1) : setMax(0)

        setPaises(filteredPaises.slice(10 * pagina, (10 * pagina) + 10))
    }
    useEffect(() => {
        handleReset()
        setTimeout(() => { setFiltro(true) }, 2500)
        return () => {
            setFiltro(false)
            setMax(24)
            handleReset()
        }
    }, [search])

    useEffect(() => {
        if (!loading) {
            setFiltro(true)
            setPaises(countries.slice(10 * (page), (10 * page) + 10))
            setPage(0)
            setMax(Math.ceil(countries.length / 10) - 1)
        }
    }, [loading])


    useEffect(() => {
        handleFilter(countries, continent, order, temp, page, dif, dur)
    }, [continent, order, temp, page, dif, dur])



    return (
        <HomeDiv>
            <>
                <div className='menu'>
                    <div className='filtros'>
                        <div className='buscador'>
                            <input type='search' className='search' placeholder='Buscar' value={name} onChange={(e) => { setName(e.target.value) }} onClick={handleClickInput} />
                            <button className='buscar' onClick={handleClickSearch} ><i className="fas fa-search"></i></button>
                        </div>
                        {filtro &&
                            <div className='filter'>
                                <div className='ContAct'>

                                    <div className='continente'>
                                        <div className='filCont'>
                                            <label>Continente:</label>
                                            <select value={continent} onChange={(e) => { setContinent(e.target.value) }} onClick={(e) => { setPage(0) }}>
                                                <option value=''></option>
                                                <option value='Africa'>Africa</option>
                                                <option value='Asia'>Asia</option>
                                                <option value='Americas'>Americas</option>
                                                <option value='Europe'>Europe</option>
                                                <option value='Oceania'>Oceania</option>
                                                <option value='Polar'>Polar</option>
                                            </select>
                                        </div>
                                        <div className='order'>
                                            <label>Ordenar por: </label>
                                            <select value={order} onChange={(e) => { setOrder(e.target.value) }} onClick={(e) => { setPage(0) }}>
                                                <option value=''></option>
                                                <option value='AZ'>Nombre ↑</option>
                                                <option value='ZA'>Nombre ↓</option>
                                                <option value='MAX'>Poblacion ↑</option>
                                                <option value='MIN'>Poblacion ↓</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='Actividades'>
                                        <div className='temp'>
                                            <label>Temporada:</label>
                                            <select value={temp} onChange={(e) => { setTemp(e.target.value) }} onClick={(e) => { setPage(0) }}>
                                                <option value=''></option>
                                                <option value='Verano'>Verano</option>
                                                <option value='Invierno'>Invierno</option>
                                                <option value='Otoño'>Otoño</option>
                                                <option value='Primavera'>Primavera</option>
                                            </select>
                                        </div>
                                        <div className='actFilters'>
                                            <div className='Duracion'>
                                                <label>Duración</label>
                                                <select value={dur} onChange={(e) => { setDur(e.target.value) }} onClick={(e) => { setPage(0) }}>
                                                    <option value=''></option>
                                                    <option value='1' >1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5 o + </option>
                                                </select>
                                            </div>
                                            <div className='Dificultad'>
                                                <label>Dificultad</label>
                                                <select value={dif} onChange={(e) => { setDif(e.target.value) }} onClick={(e) => { setPage(0) }}>
                                                    <option value=''></option>
                                                    <option value='1'> 1 </option>
                                                    <option value='2'> 2 </option>
                                                    <option value='3'> 3 </option>
                                                    <option value='4'> 4 </option>
                                                    <option value='5'> 5 </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='paginado' >
                                    <div className='pagination-bot'>
                                        <button className='np' onClick={prevPage}>
                                            <i class="fas fa-arrow-left"></i>
                                        </button>
                                        <input className='count' value={page + 1} disabled />
                                        <button className='np' onClick={nextPage}>
                                            <i class="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                </div>
                <div className='cards'>
                    {
                        loading
                            ? <Loading />
                            : paises.length > 0
                                ? paises.map(country => <Card
                                    country={country}
                                    key={country.id} />)
                                : <span>No se encontraron resultados</span>
                    }
                </div>
            </>

        </HomeDiv>
    )
}