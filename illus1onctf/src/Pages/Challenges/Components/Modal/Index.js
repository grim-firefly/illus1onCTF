import React from 'react';
import { BsBookmarkHeart, BsBookmarkX } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import s from './style.module.css';
import { FiUserCheck, FiUser } from 'react-icons/fi';
import { BsFlag } from 'react-icons/bs';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './../../../../Common/Input/Index';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';

const Modal = ({ challenge }) => {

	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (challenge) {
			setIsLoading(true);
			const fetchChallenge = async () => {
				const response = await axios.get('http://127.0.0.1:8000/api/challenges/' + challenge);
				return response.data;
			}
			fetchChallenge().then(res => {
				setData(res.challenge)
				setIsLoading(false);
				console.log(res.challenge);
			}).catch(err => {
				console.log(err)
				setIsLoading(false);
			});
		}
	}, [challenge]);

	const handleBookMark = () => {
		setData({
			...data,
			saved: !data.saved
		});
	}
	return (
		<div>
			<div className="modal fade  " id="viewChallengeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className={`modal-dialog  modal-dialog-scrollable modal-lg  modal-fullscreen-lg-down ${s.modalbody} `}>
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
					{!isLoading && <div className={`modal-content  `}>
						<div className={`modal-header ${s.headerTop} `}>
							<div className='d-flex gap-2'>
								<h5 className="modal-title" id="exampleModalLabel">{data.title}</h5>
								<button onClick={handleBookMark} className={`${s.bookmarkbtn} ${data.saved ? s.bookmarkremovebtn : ''}`}>{data.saved ? <BsBookmarkX /> : <BsBookmarkHeart />} </button>
							</div>
							<div className='d-flex align-items-center gap-2'>
								<div>
									<i className={`${s.cardSolvedIcon}  ${data.solved ? 'text-success' : ''}`}>{data.solved ? <FiUserCheck /> : < FiUser />} </i> | {data.points} points
								</div>
								<div>
									<button type="button" className={`${s.closebtn}`} data-bs-dismiss="modal" aria-label="Close"><ImCancelCircle /></button>
								</div>
							</div>


						</div>
						<div className={`${s.headerbottom}`}>
							<div className={`${s.author}`}>
								<span className={`${s.authortitle}`}>AUTHOR :</span> {data.author?? "Admin"}
							</div>
							<div className='d-flex gap-1'>

								<h6>Tags :   </h6>
								<div>
									<Link className={`${s.tagLink}`} to="/challenges/1" >{data.category}</Link>
									<Link className={`${s.tagLink} mx-1 `} >{data.category}</Link>
								</div>

							</div>


						</div>


						<div className="modal-body">
							{data.description}
						</div>
						<div className={`${s.likestatus} row`}>
							<div className='col-sm-8 col-12'>
								137,671 solves / 141,523 users attempted (97%)
							</div>
							<div className='d-flex align-items-center col-sm-4 col-12'>
								<button className={`${s.likeDislike}`}><BiDislike /></button>
								<div className='px-1'>89% Liked</div>
								<button className={`${s.likeDislike}`}><BiLike /></button>
							</div>
						</div>
						<div className="modal-footer d-flex ">
							<div className='flex-grow-1'>
								<Input icon={BsFlag} placeholder="illus1onCTF{FLAG}" />

							</div>
							<button type="button" className="btn btn-primary">Submit Flag</button>
						</div>
					</div>
					}
				</div>
			</div>
		</div>
	);
}
export default Modal;