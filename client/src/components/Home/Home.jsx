import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HomeDiv } from './StyledHome'
import { Ordenamiento } from '../../utils/ordering'
import Loading from '../Loading/Loading'
import Card from './Card/Card'
import { Filtros } from '../../utils/filters'
export const Home = () => {

    //store
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

    useEffect(() => {
        handleReset()
        setTimeout(() => { setFiltro(true) }, 2500)
        return () => {
            setFiltro(false)
            setMax(24)
            handleReset()
        }
    }, [search])


    return (
        <HomeDiv>
            <>
                <div className='menu'>
                    <div className='filtros'>
                        <div className='buscador'>
                            <input type='search' className='search' placeholder='Buscar' value={name} onChange={(e) => { setName(e.target.value) }} onClick={handleClickInput} />
                            <button className='buscar' onClick={handleClickSearch} ><i className="fas fa-search"></i></button>
                        </div>
                        {
                            filtro
                            && <div className='filter'>
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
                                            <i class="fas fa-arrow-right" />
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
                            : countries.length > 0
                                ? countries.map(country => <Card
                                    country={country}
                                    key={country.id} />)
                                : <span>No se encontraron resultados</span>
                    }
                </div>
            </>

        </HomeDiv>
    )
}