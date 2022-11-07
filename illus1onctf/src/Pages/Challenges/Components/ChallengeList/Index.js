import React from 'react';
import ChallengeCard from './../ChallengeCard/ChallengeCard';
const data = [
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice netcat...Nice netcat...Nice netcat...Nice netcat...",
		"solved": 1,
		"solve": 10,
		"like": 10
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice Python...",
		"solved": 0,
		"solve": 102,
		"like": 101
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice netcat...Nice netcat...Nice netcat...Nice netcat...",
		"solved": 1,
		"solve": 10,
		"like": 10
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice Python...",
		"solved": 0,
		"solve": 102,
		"like": 101
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice netcat...Nice netcat...Nice netcat...Nice netcat...",
		"solved": 1,
		"solve": 10,
		"like": 10
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice Python...",
		"solved": 0,
		"solve": 102,
		"like": 101
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice netcat...Nice netcat...Nice netcat...Nice netcat...",
		"solved": 1,
		"solve": 10,
		"like": 10
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice Python...",
		"solved": 0,
		"solve": 102,
		"like": 101
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice netcat...Nice netcat...Nice netcat...Nice netcat...",
		"solved": 1,
		"solve": 10,
		"like": 10
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice Python...",
		"solved": 0,
		"solve": 102,
		"like": 101
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice netcat...Nice netcat...Nice netcat...Nice netcat...",
		"solved": 1,
		"solve": 10,
		"like": 10
	},
	{
		"category": "Web Exploitation",
		"point": 10,
		"title": "Nice Python...",
		"solved": 0,
		"solve": 102,
		"like": 101
	},
];

const ChallengeList = ({handleViewChallenge}) => {
	return (
		<div className='row'>

			{
				data.map((item, index) => (
					<div key={index} className={`col-xl-4 col-lg-6  col-12 mb-1  `} >
						<ChallengeCard data={item} data-id={index} data-bs-toggle="modal" data-bs-target="#viewChallengeModal" onClick={handleViewChallenge} />
					</div>
				))
			}

		</div>
	);
}
export default ChallengeList;