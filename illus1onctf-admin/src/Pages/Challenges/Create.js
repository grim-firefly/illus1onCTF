import React, { useState } from 'react';
import OutlineButton from '../../Common/Button/Outline/Index';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Common/Input/Index';
import { PropagateLoader } from 'react-spinners';
import Swal from 'sweetalert2'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SelectBox from '../../Common/SelectBox/Index';
import JoditEditor from 'jodit-react';


const CreateChallenge = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [points, setPoints] = useState('');
	const [flag, setFlag] = useState('');
	const [categories, setCategories] = useState([]);

	const navigate = useNavigate();
	const auth = useSelector(state => state.auth)
	useEffect(() => {
		setIsLoading(true)
		const fetchCategory = async () => {
			const response = await axios.get('/categories');
			return response.data;
		}
		fetchCategory().then(data => {
			data.categories && setCategories(data.categories.map(category => ({ value: category.id, label: category.name })));
			setIsLoading(false)
		}).catch(err => {
			setIsLoading(false)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: err.response.data.message,
			})
		})

	}, []);

	const handleCreate = () => {

		setIsLoading(true)
		const createChallenge = async () => {
			const response = await axios.post('/admin/challenges', {
				title,
				description,
				category,
				points,
				flag
			});
			return response.data;
		}
		createChallenge().then(data => {
			setIsLoading(false)
			if (data.status === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: data.message,
				})
				navigate('/challenges')
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: data.message,
				})
			}
		}).catch(err => {
			setIsLoading(false)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: err.response.data.message,
			})
		})



	}


	return (
		<>
			{
				isLoading && < PropagateLoader loading={isLoading} color={"#1B98F5"} cssOverride={{
					display: "block",
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: "999999999",
					borderColor: "red",
				}
				} size={25} />
			}
			{!isLoading &&
				<div>

					<div className='row p-2'>
						<div className='col-2 '>
							<Link to="/challenges">	<OutlineButton title="List" /></Link>
						</div>

					</div>

					<div className='row justify-content-center py-2'>
						<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
							<div>
								<Input placeholder="Title" onBlur={(e) => {
									setTitle(e.target.value)
								}} />
							</div>
							<div className='mt-1'>
								<Input type="number" placeholder="points" onBlur={(e) => {
									setPoints(e.target.value)
								}} />
							</div>
							<div className='mt-1' >
								<Input placeholder="Flag" onBlur={(e) => {
									setFlag(e.target.value)
								}} />
							</div>
							<div className='mt-1'>
								<JoditEditor
									// ref={editor}
									// value={content}
									// config={config}
									// tabIndex={1} // tabIndex of textarea
									onBlur={description => setDescription(description)} // preferred to use only this option to update the content for performance reasons
									placeholder="Description"

								/>
							</div>
							<div className='mt-1'>
								<SelectBox options={categories} placeholder="Category" onChange={(e) => {
									setCategory(e.target.value)
								}} />
							</div>

							<div className='py-2 d-flex flex-row-reverse'>
								<OutlineButton title="Create" onClick={handleCreate} />
							</div>
						</div>


					</div>
				</div>
			}

		</>
	);
}
export default CreateChallenge;