import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCountry, getCountries } from '../../redux/reducer'
import { CrearDiv } from './StyledCrear'

const Crear = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries.sort())

    const [selectCountries, setSelectCountries] = useState([])

    const [form, setForm] = useState({
        name: '',
        difficult: '',
        duration: '',
        season: '',
    })


    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleCountries = (event) => {
        event.preventDefault();

        const options = event.target.options;
        const selectedCountries = [];

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedCountries.push(options[i].value);
            }
        }
        setSelectCountries(selectedCountries)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            postCountry(form, selectCountries)
        )
        event.target.reset();
        dispatch(getCountries())
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    return (
        <CrearDiv>
            <>
                <form className='form' onSubmit={handleSubmit}>

                    <div className='titulo'>
                        <span>Añadir una Actividad</span>
                    </div>

                    <div className='inputs'>
                        <div className='Nombre'>
                            <label>Nombre:</label>
                            <input
                                className='colorInput'
                                type='text' required
                                name='name'
                                onChange={handleInputChange} />
                        </div>

                        <div className='Dificultad'>
                            <label>Dificultad(1-5):</label>
                            <input
                                className='colorInput'
                                type='number' required
                                min="1" max="5"
                                name='difficult'
                                onChange={handleInputChange} />
                        </div>

                        <div className='Duracion'>
                            <label>Duracion(Semanas): </label>
                            <input
                                className='colorInput'
                                type='number' min="1"
                                name='duration' required
                                onChange={handleInputChange} />
                        </div>

                        <div className='Temporada'>
                            <label>Temporada:</label>
                            <select name='season' onChange={handleInputChange} required>
                                <option></option>
                                <option value='Verano'>Verano</option>
                                <option value='Invierno'>Invierno</option>
                                <option value='Otoño'>Otoño</option>
                                <option value='Primavera'>Primavera</option>
                            </select>
                        </div>

                        <div className='Paises'>
                            <label>Paises:</label>
                            <select multiple name='pais' onChange={handleCountries} required>
                                {
                                    countries.map(country => {
                                        return (
                                            <option
                                                value={country.id}
                                                key={country.id}>
                                                {country.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <input className='crear' type='submit' value='Crear Actividad' />

                    </div>
                </form>
                <div className='creados'>
                    <div className='title'>
                        <span>Paises con actividades</span>
                        <button className='crear fas fa-sync-alt' />
                    </div>
                    <div className='countries'>
                        {/* {

                            ? paises.map(country => <Card act country={country} key={pais.id} />)
                                    : <div className='nada'>No se han creado Actividades aún</div>
                        } */}
                    </div>
                </div>
            </>
        </CrearDiv>
    )
}

export default Crear
