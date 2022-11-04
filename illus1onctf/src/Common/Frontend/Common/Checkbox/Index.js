import React from 'react';

const Checkbox = (props) => {
	return (
		<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id={props.id} />
			<label class="form-check-label" for={props.id}>
				{props.label}
			</label>
		</div>
	);
}
export default Checkbox;