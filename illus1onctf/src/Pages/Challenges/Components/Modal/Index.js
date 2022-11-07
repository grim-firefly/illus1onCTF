import React from 'react';
import { BsBookmarkHeart, BsBookmarkX } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import s from './style.module.css';
import { FiUserCheck, FiUser } from 'react-icons/fi';
import { BsFlag } from 'react-icons/bs';
import {BiDislike} from 'react-icons/bi';
import {BiLike} from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './../../../../Common/Input/Index';

const Modal = () => {
	const [data, setData] = useState({
		title: 'Hello World',
		solved: true,
		saved: true,
		point: 100,
		category: 'Web Exploitation',
		author: 'admin',
		solve: 100,

	});

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
					<div className={`modal-content  `}>
						<div className={`modal-header ${s.headerTop} `}>
							<div className='d-flex gap-2'>
								<h5 className="modal-title" id="exampleModalLabel">{data.title}</h5>
								<button onClick={handleBookMark} className={`${s.bookmarkbtn} ${data.saved ? s.bookmarkremovebtn : ''}`}>{data.saved ? <BsBookmarkX /> : <BsBookmarkHeart />} </button>
							</div>
							<div className='d-flex align-items-center gap-2'>
								<div>
									<i className={`${s.cardSolvedIcon}  ${data.solved ? 'text-success' : ''}`}>{data.solved ? <FiUserCheck /> : < FiUser />} </i> | {data.point} points
								</div>
								<div>
									<button type="button" className={`${s.closebtn}`} data-bs-dismiss="modal" aria-label="Close"><ImCancelCircle /></button>
								</div>
							</div>


						</div>
						<div className={`${s.headerbottom}`}>
							<div className={`${s.author}`}>
								<span className={`${s.authortitle}`}>AUTHOR :</span> {data.author}
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat odit facere! Porro, enim nam! Recusandae, cum beatae consequuntur perferendis quo commodi aliquam? Totam velit consequatur officiis ipsa quos perferendis?
							Corrupti ipsa voluptatum ducimus nesciunt ea. Est voluptatibus dolorum debitis, ipsam dolor quas quo optio saepe ducimus minus corporis quisquam sit commodi error voluptate laborum perferendis. Ut minima officia veniam!
							Voluptatibus error, quaerat id laborum, magnam mollitia obcaecati, voluptatem nisi earum facere quos omnis? Optio necessitatibus dolore, iure quos sit, temporibus culpa unde odio beatae illum, ut reiciendis repudiandae tempora.
						</div>
						<div className={`${s.likestatus}`}>
							<div>
								137,671 solves / 141,523 users attempted (97%)
							</div>
							<div className='d-flex align-items-center'>
								<button className={`${s.likeDislike}`}><BiDislike/></button>
								<div className='px-1'>89% Liked</div>
								<button className={`${s.likeDislike}`}><BiLike/></button>
							</div>
						</div>
						<div className="modal-footer d-flex ">
							<div className='flex-grow-1'>
								<Input icon={BsFlag} placeholder="illus1onCTF{FLAG}" />

							</div>
							<button type="button" className="btn btn-primary">Submit Flag</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;