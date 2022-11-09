import React from 'react';
import Filters from './Components/Filters/Filters';
import ChallengeCard from './Components/ChallengeCard/ChallengeCard';
import Paginator from '../../Common/Paginator/index';
import Modal from './Components/Modal/Index';
import { useParams } from 'react-router-dom';
import ChallengeList from './Components/ChallengeList/Index';


const Challenges = () => {
	const [viewChallenge, setViewChallenge] = React.useState(null);
	const handleViewChallenge = (e) => {
		setViewChallenge(e.currentTarget.dataset.id);
	}
	const { category } = useParams();
	return (
		<div className='container'>
			<Modal />
			<div className="row">
				<div className="col-md-5 col-lg-4 col-xl-3  mt-2">

					<div className="">
						<Filters />
					</div>

				</div>
				<div className="col-md-7 col-lg-8 col-xl-9 mt-2">

					<ChallengeList handleViewChallenge={handleViewChallenge} />
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