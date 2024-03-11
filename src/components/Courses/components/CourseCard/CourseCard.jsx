export const CourseCard = (props) => {
	return (
		<div className={'course-card'}>
			<title>{props.title}</title>
			<p>{props.description}</p>
			<p className={'authors'}>
				<b>Authors: </b>
				{props.authors}
			</p>
			<p className={'duration'}>
				<b>Duration: </b>
				{props.duration}
			</p>
			<p className={'creationDate'}>
				<b>Created: </b>
				<time>{props.creationDate}</time>
			</p>
			<button onClick={props.onClick}>SHOW COURSE</button>
		</div>
	);
};
