import { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import Button from '@mui/material/Button';

function Home() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [dataFiltrada, setDataFiltrada] = useState([]);

	useEffect(() => {
		fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false')
			.then((res) => res.json())
			.then((data) => {
				setData(data.bodies);
				setLoading(false);
				setDataFiltrada(data.bodies);
			});
	}, []);

	const filtrarPorTipo = (tipo) => {
		let filtrados = [];

		if (tipo === 'Planet') {
			filtrados = data.filter((astro) => astro.isPlanet);
		} else {
			filtrados = data.filter((astro) => astro.bodyType === tipo);
		}

		setDataFiltrada(filtrados);
	};
	const filtrarMass = () => {
		let ordenMass = [];
		ordenMass = data.filter((astro) => astro.mass?.massValue).sort((a, b) => b.mass?.massValue - a.mass?.massValue);
		setDataFiltrada(ordenMass);
	};
	const mostrarRandom = () => {
		const randomIndex = Math.floor(Math.random() * data.length);
		const astroRandom = data[randomIndex];
		setDataFiltrada([astroRandom]);
	};

	return (
		<div className='continer'>
			<h1>planetas y estrellas</h1>
			<Button variant='contained' onClick={() => setDataFiltrada(data)}>
				Mostrar Todos
			</Button>
			<Button variant='contained' onClick={() => filtrarPorTipo('Planet')}>
				Planetas
			</Button>
			<Button variant='contained' onClick={() => filtrarPorTipo('Moon')}>
				Lunas
			</Button>
			<Button variant='contained' onClick={() => filtrarPorTipo('Star')}>
				Estrellas
			</Button>
			<Button variant='contained' onClick={() => filtrarPorTipo('Dwarf Planet')}>
				Planetas Enanos
			</Button>
			<Button variant='contained' onClick={() => filtrarPorTipo('Asteroid')}>
				Asteroides
			</Button>
			<Button variant='contained' onClick={() => filtrarPorTipo('Comet')}>
				Cometas
			</Button>
			<Button variant='contained' onClick={filtrarMass}>
				filtrar por masa
			</Button>
			<Button variant='contained' onClick={mostrarRandom}>
				Random Astro
			</Button>

			{loading ? <p>...loading</p> : <CardList data={dataFiltrada}></CardList>}
		</div>
	);
}

export default Home;
