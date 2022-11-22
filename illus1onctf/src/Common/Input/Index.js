import React from 'react';
import s from './style.module.css';

const Input = (props) => {
	const { type, name, placeholder, icon: Icon, ...rest } = props;
	return (
		<div className={`${s.inputbox_container}`}>
			<i className={`${s.inputbox_icon}`}>{Icon && <Icon />}</i>
			<input className={`${s.inpuxbox}`} type={type ?? 'text'} name={name} placeholder={placeholder ?? ''} {...rest} />
		</div>

	);
}
export default Input;