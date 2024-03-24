export const Input = ({ label, type, id, placeholder, value, onChange }) => {
	return (
		<div className='input'>
			<label className='label'>{label}</label>
			<input
				className='text-input'
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
