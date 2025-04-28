import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Card = ({ id, name, englishName, mass, density }) => {
	const Navigate = useNavigate();

	return (
		<>
			<div className='container'>
				<p>name:{name}</p>
				<p>Ename:{englishName}</p>
				<p>mass:{mass}</p>
				<p>density:{density}</p>
				<Button
					variant='contained'
					onClick={() => {
						Navigate(`/cuerpo/${id}`);
					}}
				>
					Detalles
				</Button>
			</div>
		</>
	);
};

export default Card;
