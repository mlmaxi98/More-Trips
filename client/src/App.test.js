import { render, fireEvent, screen } from '@testing-library/react'
import { Footer } from './components/Footer/Footer'
import CountryDetalles from './components/Country/CountryDetalles/CountryDetalles'
import Activities from './components/Activities/Activities'
test('Detalles: Debe mostrar un mensaje de error en caso de acceder a los detalles de un pais inexistente', async () => {
  render(<CountryDetalles />)

  const items = screen.getAllByText('Error')
  expect(items).toHaveLength(1)
})
test('Actividades de un país: Debe mostrar un texto en caso de no haberse registrado actividades en dicho país', async () => {
  render(<Activities />)
  expect(screen.getAllByText('No se registraron Actividades en este país')).toHaveLength(1)
})
test('Actividades de un país: Debe mostrar un título "Actividades"', async () => {
  render(<Activities />)
  expect(screen.getAllByText('Actividades')).toHaveLength(1)
})
test('Footer: Debe tener 4 botones', async () => {
  render(<Footer />)
  expect(screen.getAllByRole('button')).toHaveLength(4)
})