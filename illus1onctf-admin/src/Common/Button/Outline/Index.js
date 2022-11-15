import React from 'react';
import s from './style.module.css';
const OutlineButton = (props) => {
	const { title, Icon, classname, ...rest } = props;
	return (
		<>
			<button className={`btn btn-outline-primary ${s.sidecardBodybtn} ${classname}`}  {...rest} >{title} {Icon && <i className={`${s.btnicon}`}><Icon /></i>} </button>
		</>
	);
}
export default OutlineButton;