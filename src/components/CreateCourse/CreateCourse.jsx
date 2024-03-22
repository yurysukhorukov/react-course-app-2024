import { Input } from '../../common/Input/Input';
import { useEffect, useState } from 'react';
import {
	AUTHORS_ADD,
	AUTHORS_ALL,
	COURSE_ADD,
	formatTime,
	token,
} from '../../constants';
import { Button } from '../../common/Button/Button';
import { AuthorItem } from './components/AuthorItem/AuthorItem';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseAction } from '../../store/courses/actions';
import { addAuthorAction, getAllAuthors } from '../../store/authors/actions';
import { getAuthors } from '../../selectors';

export const CreateCourse = () => {
	const authors = useSelector(getAuthors);
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [durationValue, setDurationValue] = useState(0);
	const [durationInHours, setDurationInHours] = useState('00:00');
	const [authorName, setAuthorName] = useState('');
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);
	const [authorsList, setAuthorsList] = useState([]);
	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [durationValueError, setDurationValueError] = useState(false);
	const [authorNameError, setAuthorNameError] = useState(false);

	useEffect(() => {
		fetch(AUTHORS_ALL)
			.then((response) => response.json())
			.then((data) => dispatch(getAllAuthors(data.result)));
	}, [dispatch]);

	useEffect(() => {
		setAuthorsList([...authors].sort((a, b) => a.name.localeCompare(b.name)));
		setCourseAuthorsList([]);
	}, [authors]);
	const convertToHours = (timeInMinutes) => {
		setDurationValue(timeInMinutes);
		setDurationInHours(formatTime(timeInMinutes));
	};

	const createAuthor = async () => {
		if (authorName) {
			const newAuthor = {
				name: authorName,
			};

			try {
				const response = await fetch(AUTHORS_ADD, {
					method: 'POST',
					body: JSON.stringify(newAuthor),
					headers: {
						'Content-type': 'application/json',
						Authorization: token,
					},
				});

				if (!response.ok) {
					const errorResponse = await response.json();
					throw new Error(errorResponse.errors);
				}

				const data = await response.json();
				dispatch(addAuthorAction(data.result));

				setAuthorName('');
			} catch (err) {
				console.error('Error: ', err.message);
			}
		} else {
			setAuthorNameError(true);
		}
	};

	const removeFromCourseAuthors = (author) => {
		setCourseAuthorsList(courseAuthorsList.filter((a) => a.id !== author.id));
		setAuthorsList(
			[...authorsList, author].sort((a, b) => a.name.localeCompare(b.name))
		);
	};
	const addToCourseAuthors = (author) => {
		setAuthorsList(authorsList.filter((a) => a.id !== author.id));
		setCourseAuthorsList([...courseAuthorsList, author]);
	};
	const cancelCourseEdit = () => {
		navigate('/courses');
	};
	const createCourse = () => {
		if (title && description && durationValue) {
			const newCourse = {
				id: uuidv4(),
				title: title,
				description: description,
				duration: durationValue,
				authors: [...courseAuthorsList.map((author) => author.id)],
			};

			fetch(COURSE_ADD, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify(newCourse),
			})
				.then((response) => {
					if (response.ok) return response.json();
					return response.json().then((response) => {
						throw new Error(response.errors);
					});
				})
				.then((data) => dispatch(addCourseAction(data.result)))
				.catch((err) => console.error('caught' + err.message));

			navigate('/courses');
		} else {
			setTitleError(true);
			setDescriptionError(true);
			setDurationValueError(true);
		}
	};
	return (
		<div className='editCreatePage'>
			<h2>Course Edit/Create Page</h2>
			<form className='editCreateForm'>
				<h4>Main Info</h4>
				<div className={`courseTitle ${titleError ? 'error' : ''}`}>
					<Input
						type='text'
						id='title'
						label='Title'
						onChange={(e) => {
							setTitle(e.target.value);
							setTitleError(false);
						}}
					/>
					{titleError && <p className='error-message'>Title is required.</p>}
				</div>
				<label htmlFor='courseDescription'>Description</label>
				<div className={`courseDescription ${descriptionError ? 'error' : ''}`}>
					<textarea
						id='courseDescription'
						title='Description'
						onChange={(e) => {
							setDescription(e.target.value);
							setDescriptionError(false);
						}}
					/>
					{descriptionError && (
						<p className='error-message'>Description is required.</p>
					)}
				</div>
				<h4>Duration</h4>
				<div className={`courseDuration ${durationValueError ? 'error' : ''}`}>
					<Input
						type='number'
						id='duration'
						label='Duration'
						onChange={(e) => {
							convertToHours(parseInt(e.target.value));
							setDurationValueError(false);
						}}
					/>
					{durationValueError && (
						<p className='error-message'>Duration is required.</p>
					)}
				</div>
				<p>{durationInHours} hours</p>
				<h4>Authors</h4>
				<div className={`authorName ${authorNameError ? 'error' : ''}`}>
					<Input
						type='text'
						id='authorName'
						label='Author Name'
						value={authorName}
						onChange={(e) => {
							setAuthorName(e.target.value);
							setAuthorNameError(false);
						}}
					/>
					{authorNameError && (
						<p className='error-message'>Author name is required.</p>
					)}
				</div>
				<Button buttonText='CREATE AUTHOR' onClick={createAuthor} />
				<h4>Course Authors</h4>
				<ul className='courseAuthorsList'>
					{courseAuthorsList.length > 0 ? (
						courseAuthorsList.map((author) => (
							<li key={author.id}>
								<AuthorItem
									name={author.name}
									icon='fa-solid fa-trash'
									onClick={() => removeFromCourseAuthors(author)}
								/>
							</li>
						))
					) : (
						<p>Author list is empty</p>
					)}
				</ul>
				<h4>Authors List</h4>
				<ul className='authorsList'>
					{authorsList.map((author) => (
						<li key={author.id}>
							<AuthorItem
								name={author.name}
								icon='fa-solid fa-plus'
								onClick={() => addToCourseAuthors(author)}
							/>
						</li>
					))}
				</ul>
			</form>
			<div className='controlButtonsGroup'>
				<Button buttonText='CANCEL' onClick={cancelCourseEdit} />
				<Button buttonText='CREATE COURSE' onClick={createCourse} />
			</div>
		</div>
	);
};
