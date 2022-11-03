import React from 'react';
import s from './style.module.css';
import { BsBarChart } from 'react-icons/bs';
import Progress from './Components/Progress';
const ProgressTracker = () => {
	return (
		// <div>
		// 	hi
		// </div>
		<>
			<div className={`${s.progressContainer}`}>
				<h1 className={`${s.progressHeading} `}><i className={`${s.progressHeadingIcon}`}><BsBarChart /></i> Progress Overview</h1>

				<Progress title="Binary Exploitation" value="70" total="100" color="var(--bs-primary)" />
				<Progress title="Cryptography" value="70" total="100" color="var(--bs-primary)" />
				<Progress title="Forensics" value="70" total="100" color="var(--bs-primary)" />
				<Progress title="General Skills" value="70" total="100" color="var(--bs-primary)" />
				<Progress title="Reverse Engineering" value="70" total="100" color="var(--bs-primary)" />
				<Progress title="Web Exploitation" value="70" total="100" color="var(--bs-primary)" />

				<hr className='' />
				<Progress title="Total Solved" value="70" total="100" color="var(--bs-info)" />

			</div>

		</>
	);
}
export default ProgressTracker;