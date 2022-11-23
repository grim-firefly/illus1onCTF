import React from 'react';
import s from './style.module.css';
const SelectBox = (props) => {
	const { options, ...rest } = props;
	return (
		<div>
			<select className={`form-select ${s.selectbox}`} {...rest}>
				{
					options.map((item, index) => {
						return <option className={`${s.options}`} key={index} value={item.value} >{item.label}</option>
					})
				}
			</select>
		</div>
	);
}
export default SelectBox;