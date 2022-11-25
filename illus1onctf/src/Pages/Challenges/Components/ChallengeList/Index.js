import React from 'react';
import ChallengeCard from './../ChallengeCard/ChallengeCard';

const ChallengeList = ({ handleViewChallenge, challenges }) => {
	return (
		<div className='row'>

			{
				challenges.map((item, index) => (
					<div key={index} className={`col-xl-4 col-lg-6  col-12 mb-1  `} >
						<ChallengeCard data={item} data-id={item.id} data-bs-toggle="modal" data-bs-target="#viewChallengeModal" onClick={handleViewChallenge} />
					</div>
				))
			}

		</div>
	);
}
export default ChallengeList;