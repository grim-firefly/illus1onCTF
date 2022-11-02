import React from 'react';
import s from './style.module.css';

const Input = (props) => {
	return (
		<div className={`${s.inputbox_container}`}>
			<i className={`${s.inputbox_icon}`}><props.icon /></i>
			<input className={`${s.inpuxbox}`} type={props.type ?? 'text'} name={props.name} placeholder={props.placeholder ?? ''} />
		</div>

	);
}
export default Input;