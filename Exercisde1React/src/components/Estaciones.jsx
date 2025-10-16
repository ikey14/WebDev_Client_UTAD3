import Paisaje from './Paisaje'

const estaciones = [
    {nombre: "verano", imgSrc: 'verano.jpg'},
    {nombre: "invierno", imgSrc: 'invierno.jpg'},
    {nombre: "primavera", imgSrc: 'primavera.jpg'},
    {nombre: "otoño", imgSrc: 'otono.jpg'}
]

export default function Estaciones()
{
    return(<div>

        {
            estaciones.map(item => <Paisaje key = {item.nombre} name = {item.nombre} imgSrc = {item.imgSrc} />)
        }

    </div>)
}