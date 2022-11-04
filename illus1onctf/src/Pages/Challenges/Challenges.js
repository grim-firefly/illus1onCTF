import React from 'react';
import Filters from './Components/Filters/Filters';
import ChallengeCard from './Components/ChallengeCard/ChallengeCard';

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
	}
];

const Challenges = () => {
	return (
		<div className='container'>
			<div className="row mt-2">
				<div className="col-md-5 col-lg-4 col-xl-3  ">
					<div className="">
						<Filters />
					</div>

				</div>
				<div className="col-md-7 col-lg-8 col-xl-9">
					<div className='row'>

						{
							data.map((item, index) => (

								<div key={index} className='col-4 mb-1' >
									<ChallengeCard data={item} />
								</div>
							))
						}

					</div>
				</div>
			</div>
		</div >
	);
}
export default Challenges;