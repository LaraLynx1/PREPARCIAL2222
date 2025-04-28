import { useState, useEffect } from 'react';
import CardDetail from '../Components/CardDetail';
import { useParams } from 'react-router-dom';

function Details() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<p>...loading</p>
			) : (
				<CardDetail
					key={data.id}
					id={data.id}
					name={data.name}
					englishName={data.englishName}
					mass={data.mass?.massValue}
					density={data.density}
				></CardDetail>
			)}
		</div>
	);
}

export default Details;
