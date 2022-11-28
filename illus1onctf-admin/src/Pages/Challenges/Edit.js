import React from 'react';
import OutlineButton from '../../Common/Button/Outline/Index';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Input from '../../Common/Input/Index';
import Checkbox from '../../Common/Checkbox/Index';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import axios from 'axios';
import Swal from 'sweetalert2';
import SelectBox from '../../Common/SelectBox/Index';
import JoditEditor from 'jodit-react';

const EditChallenge = () => {
	const { id } = useParams()
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [points, setPoints] = useState('');
	const [flag, setFlag] = useState('');
	const [categories, setCategories] = useState([]);
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

	useEffect(() => {
		setIsLoading(true)
		const fetchChallenge = async () => {
			const response = await axios.get(`/admin/challenges/${id}`);
			return response.data;
		}
		fetchChallenge().then(data => {
			setTitle(data.challenge.title)
			setDescription(data.challenge.description)
			setCategory(data.challenge.category)
			setPoints(data.challenge.points)
			setFlag(data.challenge.flag)
			setIsLoading(false)
		}).catch(err => {
			setIsLoading(false)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: err.response.data.message,
			})
		})
	}, [id]);

	const auth = useSelector(state => state.auth)






	const handleUpdate = () => {

		setIsLoading(true)
		const updateData = async () => {
			const response = await axios.put(`/admin/challenges/${id}`, {
				id,
				title,
				description,
				category,
				points,
				flag
			});
			return response.data;
		}
		updateData().then(data => {
			setIsLoading(false)
			Swal.fire({
				icon: 'success',
				title: 'Success',
				text: data.message,
			})
			navigate('/challenges')
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
				}} />
			}

			{!isLoading && <div>

				<div className='row p-2'>
					<div className='col-2 '>
						<Link to="/challenges">	<OutlineButton title="List" /></Link>
					</div>

				</div>

				<div className='row justify-content-center py-2'>
					<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
						<div>
							<Input placeholder="Title" defaultValue={title} onBlur={(e) => {
								setTitle(e.target.value)
							}} />
						</div>
						<div className='mt-1'>
							<Input type="number" placeholder="points" defaultValue={points} onBlur={(e) => {
								setPoints(e.target.value)
							}} />
						</div>
						<div className='mt-1' >
							<Input placeholder="Flag" defaultValue={flag} onBlur={(e) => {
								setFlag(e.target.value)
							}} />
						</div>
						<div className='mt-1'>
							<JoditEditor
								// ref={editor}
								// config={config}
								// tabIndex={1} // tabIndex of textarea
								value={description}
								onBlur={description => setDescription(description)} // preferred to use only this option to update the content for performance reasons
								placeholder="Description"

							/>
						</div>
						<div className='mt-1'>
							<SelectBox options={categories} value={category} placeholder="Category" onChange={(e) => {
								setCategory(e.target.value)
							}} />
						</div>

						<div className='py-2 d-flex flex-row-reverse'>
							<OutlineButton title="Update" onClick={handleUpdate} />
						</div>
					</div>


				</div>
			</div>
			}
		</>

	);
}
export default EditChallenge;