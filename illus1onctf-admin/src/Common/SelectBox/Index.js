import React from 'react';

const SelectBox = (props) => {
	const { options, value, onChange, label, name, error } = props;
	return (
		<div>
			<select class="form-select" aria-label="Default select example">
				<option selected>Select Role</option>
				{
					options.map((item, index) => {
						return <option value={item.value}>{item.label}</option>
					})
				}
			</select>
		</div>
	);
}
export default SelectBox;