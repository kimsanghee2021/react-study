import React from 'react';

import styles from './styles.module.scss';

interface Props{
	text?: string;
	placeholder?: string;
	textValue?: string;
	disabled?: boolean;
	error?: boolean;
	number?: number;
	handleChange: (e:string)=> void;
	onTypeEnter : () => void;
}

const index = ({
	text,
	placeholder,
	textValue,
	error,
	disabled,
	number,
	onTypeEnter,
	handleChange,
} : Props) => {

	// const arrClass : string[] = [styles.input];
	// if(error){
	// 	arrClass.push(styles.error);
	// }
	// if(number){
	// 	arrClass.push(styles.number);
	// }
const error1=error ? styles.error : '';
const txtNum = text ==='number' ? styles.number : '';

//const arrClass = `${styles.input} ${error? styles.error : ''} ${number? styles.number : ''}`
return(
	<div className={styles.inputText}>
		<input
			type={text ? 'text' : 'number'}
			placeholder={placeholder}
			value={textValue}
			disabled={disabled}
			className={[styles.input, error1,txtNum].filter(x=>x).join(' ')}
			onChange={e=>handleChange(e.target.value)}
			onKeyUp={e => {
				if(e.key === 'Enter'){
					onTypeEnter();
					}
				}
			}

		/>


	</div>
	);
}

export default index;


