import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
	return (
		<>
			<div className='container'>
				{data.map((data) => {
					return (
						<Card
							key={data.id}
							id={data.id}
							name={data.name}
							englishName={data.englishName}
							mass={data.mass?.massValue}
							density={data.density}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CardList;
