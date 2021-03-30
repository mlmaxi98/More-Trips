/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCountry, getCountries } from '../../redux/actions'
import { CrearDiv } from './StyledCrear'
import Loading from '../Loading/Loading'
import Card from '../Home/Card/Card'
const Crear = () => {
    const dispatch = useDispatch();
    const idCountries = useSelector(state => state.idCountries)
    const countries = useSelector(state => state.countries)
    const [pais, setPais] = useState([])
    const [paises, setPaises] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [form, setForm] = useState({
        Nombre: '',
        Dificultad: '',
        Duracion: '',
        Temporada: '',
    })
    const handleFilter = (arrayPaises) => {
        setPaises([]);
        let filteredPaises = arrayPaises;
        filteredPaises = filteredPaises.filter(p => p.activities && p.activities.length > 0)
        setPaises(filteredPaises)
    }

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handlePais = (event) => {
        event.preventDefault();
        const opciones = event.target.options;
        const seleccionadas = [];
        for (let i = 0; i < opciones.length; i++) opciones[i].selected && seleccionadas.push(opciones[i].value);
        setPais(seleccionadas)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postCountry(form, pais))
        event.target.reset();
        alert('Activity Created')
        setTimeout(() => { dispatch(getCountries()) }, 500)
    }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            handleFilter(countries)
            setLoading(false)
        }, 1500)
    }, [loading2])

    return (
        <CrearDiv>
            <>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='titulo'> <span>Añadir una Actividad</span> </div>
                    <div className='inputs'>
                        <div className='Nombre'>
                            <label>Nombre:</label>
                            <input className='colorInput' type='text' name='Nombre' onChange={handleInputChange} required />
                        </div>
                        <div className='Dificultad'>
                            <label>Dificultad(1-5):</label>
                            <input className='colorInput' type='number' min="1" max="5" name='Dificultad' onChange={handleInputChange} required />
                        </div>
                        <div className='Duracion'>
                            <label>Duracion(Semanas): </label>
                            <input className='colorInput' type='number' min="1" name='Duracion' onChange={handleInputChange} required />
                        </div>

                        <div className='Temporada'>
                            <label>Temporada:</label>
                            <select name='Temporada' onChange={handleInputChange} required>
                                <option></option>
                                <option value='Verano'>Verano</option>
                                <option value='Invierno'>Invierno</option>
                                <option value='Otoño'>Otoño</option>
                                <option value='Primavera'>Primavera</option>
                            </select>
                        </div>


                        <div className='Paises'>
                            <label>Paises:</label>
                            <select className='' multiple name='pais' onChange={handlePais} required>
                                {idCountries.length > 0 ? idCountries.map((pais, i) => {
                                    return <option value={pais.id} key={pais.id}>{pais.name}</option>
                                }) : <option >Cargando</option>}
                            </select>
                        </div>
                        <input className='crear' type='submit' value='Crear Actividad' />
                    </div>
                </form>
                <div className='creados'>
                    <div className='title'>
                        <span>Paises con actividades</span>
                        <button className='crear' onClick={() => { setLoading2(!loading2) }}><i className="fas fa-sync-alt"></i></button>
                    </div>
                    <div className='countries'>
                        {loading ? <Loading /> : paises.length > 0 ? paises.map(pais => <Card act={true} pais={pais} key={pais.alpha3Code} />) : <div className='nada'>No se han creado Actividades aún</div>}
                    </div>
                </div>
            </>

        </CrearDiv>
    )
}

export default Crear
