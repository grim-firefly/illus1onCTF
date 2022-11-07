import React from 'react';
import { BsBookmarkHeart, BsBookmarkX } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import s from './style.module.css';
import { FiUserCheck, FiUser } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Modal = () => {
	const [data, setData] = useState({
		title: 'Hello World',
		solved: true,
		saved: true,
		point: 100,
		category: 'Web Exploitation',
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
				<div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg  modal-fullscreen-lg-down ${s.width} `}>
					<div className={`modal-content  `}>
						<div className={`modal-header ${s.headerTop} `}>
							<div className='d-flex gap-2'>
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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
						<div className={`modal-header`}>
							<div className='d-flex gap-1'>
								<h6>Tags :   </h6>
								<div>
									<Link  className={`${s.tagLink}`} to="/challenges/1" >{data.category}</Link>
									<Link className={`${s.tagLink} mx-1 `} >{data.category}</Link>
								</div>
								
							</div>

						</div>

						<div className="modal-body">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit quam omnis alias recusandae veritatis corrupti laborum ratione minus, dicta incidunt quaerat pariatur cupiditate voluptatum, quia tempore accusamus libero. Magni!
							Perferendis quisquam, molestias suscipit repellat nisi rem corrupti. Voluptatem explicabo, odio libero culpa possimus eos ab quaerat ducimus pariatur blanditiis iure iusto laborum eligendi maiores ratione quod vero deserunt omnis.
							Earum consequuntur, ratione nostrum, quam, soluta quod commodi porro fugiat consectetur voluptatibus dolore. Laboriosam labore, enim iure nemo debitis aspernatur maxime deleniti cupiditate ratione aperiam quasi recusandae et nam vel.
							Voluptatem dolore sit velit mollitia veniam molestias ipsam ullam minima magnam inventore officiis, labore voluptatum doloremque, in vel! Laboriosam in ullam numquam rem nesciunt hic quae error voluptatum, voluptatibus nulla?
							Non corrupti alias nobis magnam, officia porro rem molestias voluptatum labore voluptas laborum, eius dolores! Sapiente, perferendis reprehenderit. Corrupti magni sit quos eveniet doloremque adipisci error excepturi. Magnam, commodi quaerat?
							Veniam aperiam, molestiae libero consequuntur, exercitationem iusto fuga eius assumenda dolore molestias quia atque nostrum maxime, nisi ipsa! Labore sed impedit, vero alias delectus ipsa nostrum itaque ipsam cum blanditiis!
							Quam nesciunt laborum rerum officia quas totam ipsam illum nam. Itaque voluptate expedita tempora, ut magni rerum quasi corporis a harum pariatur, laboriosam sunt, reprehenderit eligendi hic! Corrupti, incidunt unde.
							Totam, unde quibusdam? Sequi cum perspiciatis odit. Quas optio mollitia velit fugit eum officiis at omnis, quia dolor aliquid aliquam alias quo, vel tenetur deleniti non eius corporis. Repellat, reprehenderit!
							Tempora, quae pariatur sit at nostrum quisquam temporibus laborum aliquid vero reiciendis aliquam commodi vel excepturi aspernatur culpa maiores velit accusamus quod rem optio maxime! Ratione tempore praesentium voluptas iure.
							Molestias, ipsam? Nostrum excepturi error qui debitis impedit minus provident voluptatibus sequi maiores architecto? Optio blanditiis iusto animi eaque. Ab ex reiciendis quas beatae exercitationem labore quos possimus repellat officiis!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;