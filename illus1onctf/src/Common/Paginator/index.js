import React, { useState } from 'react';
import s from './style.module.css';
import { useEffect } from 'react';



const Paginator = ({ total, handlePage }) => {
	const [pageActive, setPageActive] = useState(0);
	const [pageStart, setPageStart] = useState(0);
	const [pageEnd, setPageEnd] = useState(7);
	const [page, setPage] = useState([]);
	useEffect(() => {
		page.length = total;
		setPage(Array.from({ length: total }, (_, idx) => idx + 1));
		setPageEnd(total > 7 ? 7 : total);

	}, [total]);

	useEffect(() => {
		handlePage(pageActive);
	}, [pageActive]);
	const handleActivePage = (idx) => {
		const index = pageStart + idx;
		const start = Math.max(0, Math.min(index - 3, page.length - 7));
		const end = Math.min(page.length, start + 7);
		const tmpidx = start + idx;
		const tmpacive = tmpidx < 3 ? pageStart + idx : (tmpidx > page.length - 3 ? pageStart + idx - start : 3);

		const active = start == pageStart ? idx : tmpacive;
		setPageStart(start);
		setPageActive(active);
		setPageEnd(end);

	}
	const handleNextPage = () => {
		if (pageStart + pageActive + 1 < page.length) {
			handleActivePage(pageActive + 1);
		}
	}
	const handlePrevPage = () => {
		if (pageStart + pageActive - 1 >= 0) {
			handleActivePage(pageActive - 1);
		}
	}
	const resetPage = () => {
		setPageStart(0);
		setPageActive(0);
		setPageEnd(7);
	}
	const endPage = () => {
		const start = Math.max(0, page.length - 7);
		const end = page.length;
		const active = end - start - 1;
		setPageStart(start);
		setPageActive(active);
		setPageEnd(end);
	}
	return (
		<nav className={` ${s.paginationcontainer}`} >
			<ul className={`${s.pagination}`}>
				<li >
					<button className={`${s.pageitem}`} onClick={resetPage} aria-label="First"><span aria-hidden="true">«</span><span ></span></button>
				</li>
				<li >
					<button className={`${s.pageitem}`} onClick={handlePrevPage} aria-label="Previous" ><span aria-hidden="true">‹</span><span></span></button>
				</li>
				{
					page.slice(pageStart, pageEnd).map((item, index) => {
						return (<li key={index} ><button onClick={() => handleActivePage(index)} className={`${s.pageitem}  ${pageActive == index ? s.active : ''} `} >{item}</button></li>);
					})
				}
				<li >
					<button className={`${s.pageitem}`} onClick={handleNextPage} aria-label="Next" ><span>›</span><span ></span></button>
				</li>
				<li >
					<button className={`${s.pageitem}`} onClick={endPage} aria-label="Next" ><span >»</span><span ></span></button>
				</li>
			</ul>
		</nav>

	);
}
export default Paginator;