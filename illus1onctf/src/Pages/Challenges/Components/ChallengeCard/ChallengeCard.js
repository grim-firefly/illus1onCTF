import React from 'react';
import s from './style.module.css';
import { FiUser, FiUserCheck } from 'react-icons/fi';
import { AiOutlineLike } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
const ChallengeCard = (props) => {
	const { data, ...cardprops } = props;
	return (
		<div className={`${s.card} ${data.solved ? s.solved : ''}`}  {...cardprops} >
			<div className={`${s.cardHeader}`}>
				<div><b>{data.title.slice(0, Math.min(data.title.length, 20))}{data.title.length > 20 ? '...' : ''}</b></div>
				<div ><i className={`${s.cardHeaderIcon}`}>{data.solved ? <FiUserCheck /> : < FiUser />} </i> | {data.points} points</div>

			</div>
			<div className={`${s.cardBody}`} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.description.slice(0, Math.min(data.description.length, 50))) }}>

			</div>

			<div className={` ${s.cardfooter}`}>
				<div>Solves {data.solves}</div>
				<div>{data.solves} <i className={`${s.cardfootericon}`}><AiOutlineLike /></i> </div>
			</div>

		</div >

	);
}
export default ChallengeCard;