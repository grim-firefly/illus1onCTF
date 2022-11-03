import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

const StatusCard = (props) => {
	return (
		<Link className={`${s.cardcontainer}`} to={props.url} >
			<div className={`${s.card}`}>
				<p className={`${s.cardheading}`}>{props.heading}</p>
				<div className={`${s.cardbody}`}>{props.body} </div>
				<div className={`${s.cardfooter}`}>{props.footer} </div>
			</div>
		</Link>
	);
}
export default StatusCard;