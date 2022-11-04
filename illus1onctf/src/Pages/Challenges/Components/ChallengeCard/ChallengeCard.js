import React from 'react';
import s from './style.module.css';
import { FiUser, FiUserCheck } from 'react-icons/fi';
import { AiOutlineLike } from 'react-icons/ai';
import { useEffect, useState } from 'react';
const ChallengeCard = ({ data }) => {

	return (
		<div className={`${s.card} ${data.solved ? s.solved : ''}`}>

			<div className={`${s.cardHeader}`}>
				<div>{data.category}</div>
				<div ><i className={`${s.cardHeaderIcon}`}>{data.solved ? <FiUserCheck /> : < FiUser />} </i> | {data.point} points</div>

			</div>
			<div className={`${s.cardBody}`}>
				{data.title}
			</div>

			<div className={` ${s.cardfooter}`}>
				<div>Solves {data.solve}</div>
				<div>{data.like} <i className={`${s.cardfootericon}`}><AiOutlineLike /></i> </div>
			</div>

		</div >

	);
}
export default ChallengeCard;