import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeDiv } from './StyledHome'
import Loading from '../Loading/Loading'
import Card from './Card/Card'
import { getCountries } from '../../redux/reducer'
export const Home = () => {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const loading = useSelector(state => state.loading)

    const [form, setForm] = useState({
        name: '',
        region: '',
        season: '',
        difficult: '',
        duration: '',
        page: 0,
        order: 'ASC',
        size: 5,
    })

    const handleForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const nextPage = () => {
        if (form.page < 25) setForm({
            ...form,
            page: form.page + 1,
        })
    }

    const prevPage = () => {
        if (form.page > 0) setForm({
            ...form,
            page: form.page - 1,
        })
    }

    const handleReset = () => { }

    useEffect(() => {
        dispatch(
            getCountries(form)
        )
        return () => {
            handleReset()
        }
    }, [form])


    return (
        <HomeDiv>
            <>
                <div className='menu'>

                    <div className='filtros'>

                        <div className='buscador'>

                            <input
                                type='search'
                                className='search'
                                placeholder='Buscar'
                                name='name'
                                onChange={handleForm} />
                            <button className='buscar' onClick={handleForm}>
                                <i className="fas fa-search" />
                            </button>

                        </div>
                        {
                            countries.length > 0
                            && <div className='filter'>
                                <div className='ContAct'>

                                    <div className='continente'>
                                        <div className='filCont'>
                                            <label>Continente:</label>
                                            <select name='region' onChange={handleForm}>
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
                                            <select name='order' onChange={handleForm}>
                                                <option value='ASC'>ASC</option>
                                                <option value='DESC'>DESC</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='Actividades'>

                                        <div className='temp'>
                                            <label>Temporada:</label>
                                            <select name='season' onChange={handleForm}>
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
                                                <select name='duration' onChange={handleForm}>
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
                                                <select name='difficult' onChange={handleForm}>
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
                                            <i class="fas fa-arrow-left" />
                                        </button>
                                        <input className='count' value={form.page + 1} disabled />
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