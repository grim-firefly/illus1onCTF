import React from 'react';
import Filters from './Components/Filters/Filters';
import ChallengeCard from './Components/ChallengeCard/ChallengeCard';
import Paginator from './Components/Paginator/index';

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

const Challenges = () => {
	return (
		<div className='container'>
			<div className="row">
				<div className="col-md-5 col-lg-4 col-xl-3  mt-2">

					<div className="">
						<Filters />
					</div>

				</div>
				<div className="col-md-7 col-lg-8 col-xl-9 mt-2">
					
					<div className='row'>

						{
							data.map((item, index) => (

								<div key={index} className='col-xl-4 col-lg-6  col-12 mb-1' >
									<ChallengeCard data={item} />
								</div>
							))
						}

					</div>
					<div className='row'>
						<div className='col-12 mt-1'>
							<Paginator />

						</div>

					</div>
				</div>
			</div>
		</div >
	);
}
export default Challenges;