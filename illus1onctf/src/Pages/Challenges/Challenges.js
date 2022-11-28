import React from 'react';
import Filters from './Components/Filters/Filters';
import ChallengeCard from './Components/ChallengeCard/ChallengeCard';
import Paginator from '../../Common/Paginator/index';
import Modal from './Components/Modal/Index';
import { useParams } from 'react-router-dom';
import ChallengeList from './Components/ChallengeList/Index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';


const Challenges = () => {
	const [viewChallenge, setViewChallenge] = React.useState(null);
	const handleViewChallenge = (e) => {
		setViewChallenge(e.currentTarget.dataset.id);
	}
	const [challenges, setChallenges] = useState([]);
	const [total, setTotal] = useState(1);
	const [pageSize, setPageSize] = useState(18);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [maxPoints, setMaxPoints] = useState(1000);
	const [minPoints, setMinPoints] = useState(0);
	useEffect(() => {
		setIsLoading(true);
		const fetchChallenge = async () => {
			const response = await axios.get('http://127.0.0.1:8000/api/challenges', {
				params: {
					page,
					pageSize,
					search,
					maxPoints,
					minPoints
				}

			});
			return response.data;
		}
		fetchChallenge().then(data => {
			setChallenges(data.challenges)
			setTotal(data.total)
			setIsLoading(false);

		}).catch(err => {
			console.log(err);
			setIsLoading(false);
		});

	}, [page, pageSize, search, maxPoints, minPoints]);


	const handleSearch = (e) => {
		setTimeout(() => {
			setSearch(e.target.value);
			setPage(1);
		}, 500)
	}
	const handleMaxPonts = (e) => {

		setTimeout(() => {
			setMaxPoints(e.target.value);
		}, 500)
	}
	const handleMinPoints = (e) => {

		setTimeout(() => {
			setMinPoints(e.target.value);
		}, 500)

	}
	return (
		<>
			{
				isLoading && < PropagateLoader loading={isLoading} color={"#1B98F5"} cssOverride={{
					display: "block",
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: "999999999",
					borderColor: "red",
				}} />
			}
			<div className='container'>
				<Modal challenge={viewChallenge} />
				<div className="row">
					<div className="col-md-5 col-lg-4 col-xl-3  mt-2">

						<div className="">
							<Filters search={handleSearch} maxPoints={handleMaxPonts} minPoints={handleMinPoints} />
						</div>

					</div>
					{!isLoading &&
						<div className="col-md-7 col-lg-8 col-xl-9 mt-2">

							<ChallengeList challenges={challenges} handleViewChallenge={handleViewChallenge} />
							<div className=' paginationcontainer mt-1'>
								<Pagination
									showSizeChanger
									responsive
									defaultPageSize={pageSize}
									onShowSizeChange={(current, pageSize) => {
										setPageSize(pageSize)
									}}
									defaultCurrent={page}
									pageSizeOptions={[18, 36, 72, 120]}
									onChange={(page) => setPage(page)}
									total={total}

								/>


							</div>
						</div>
					}
				</div>
			</div >
		</>

	);
}
export default Challenges;