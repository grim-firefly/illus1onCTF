import React from 'react';
import s from './style.module.css';

const Input = (props) => {
	const {icon,name,placeholder,...rest  } = props;
	return (
		<div className={`${s.inputbox_container}`}>
			<i className={`${s.inputbox_icon}`}>{icon && <props.icon />}</i>
			<input className={`${s.inpuxbox}`} type={props.type ?? 'text'} name={name}  placeholder={placeholder ?? ''} {...rest} />
		</div>

	);
}
export default Input;