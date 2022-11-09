import React from 'react';

const Progress = (props) => {
	return (
		<div className={`row align-items-center my-1`}>
			<div className='col-6 '>
				{props.title}
			</div>
			<div className='col-6'>
				<div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="{props.value}" aria-valuemin="0" aria-valuemax="{props.total}" style={{ width: `${(props.value*100)/Math.max(1,props.total)}%`,backgroundColor: props.color }} >{`${props.value}/${props.total}`}</div>
				</div>
			</div>

		</div>
	);
}
export default Progress;