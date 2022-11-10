import React from 'react';
import s from './style.module.css';
const OutlineButton = (props) => {
	const {title,classname,...rest} = props;
	return (
		<>
			<button className={`btn btn-outline-primary ${s.sidecardBodybtn} ${classname}`}  {...rest} >{title}</button>
		</>
	);
}
export default OutlineButton;