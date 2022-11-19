import React from 'react';

const Checkbox = (props) => {
	const { label,id, ...rest } = props;
	return (
		<div className="form-check">
			<input className="form-check-input" type="checkbox"  defaultChecked={true}  id={id} {...rest} />
			<label className="form-check-label" htmlFor={id}>
				{label}
			</label>
		</div>
	);
}
export default Checkbox;