import React,{useState, useEffect} from 'react';

import styles from './styles.module.scss';

import InputText from '~/common/InputText'

interface IValues{message:string, isActive:boolean, status:'ready'|'doing'|'done'}

const clone = (r:any) => JSON.parse(JSON.stringify(r));

const Index = () =>{
	//인풋박스에 들어가는 value

	const [defaultValue, setDefaultValue] = useState<string>("");

	//list
	const [values, setValues] = useState<IValues[]>([]);

	//수정버튼을 클릭 한것의 index
	const [itemIdx, setItemIdx] = useState<number>(-1);

	//전체선택을 체크 했을 때 
	const [isAllChecked, setIsAllChecked] = useState<boolean>(false);	

	//enter 눌렀을 시 이벤트 발생 
	const onSubmit =() => {
		//양수 일 때 (데이터가 있고 유저가 그 데이터를 클릭 했을 때 해당 데이터의 인덱스 값)
console.log(defaultValue)
		if(itemIdx > -1){
			const _values = clone(values);
			_values[itemIdx].message = defaultValue; 
			setValues(_values); //데이터 덮어씌우기
			setItemIdx(-1); //수정이 완료되었으면 itemIdx를 초기화한다.
		} else{
			//최초 아이템 등록 시 - 리스트 추가 시
			
			if(defaultValue){ //여기서 defaultValue값은 값이 있으니까 true로 노출된다.
				setValues([...values,{
						message : defaultValue,
						isActive : false,
						status : 'ready'
				}]);
			}
		}
		setDefaultValue('');
	};

	//이벤트가 실행될때마다 발생함 useEffect
	useEffect(()=>{
		//체크된 아이템의 총 갯수
		let countIsChecked = 0;
		values.map(e => {
			if(e.isActive){
				countIsChecked += 1;
			}
		});
		//체크된 아이템 총 갯수 countIsChecked와 values의 총 갯수를 비교해서 동일하면 전체선택 한것으로 간주
		setIsAllChecked(countIsChecked === values.length);

		//지금 useEffect는 values의 값이 조금이라도 바뀔때마다 실행 됨
		localStorage.setItem('values', JSON.stringify(values));
	},[values]);




	const removeItem = (idx:number) => {
		const _values = clone(values);
		//값이 1개씩 삭제
		_values.splice(idx,1);
		//다시 덮어씌우기
		setValues(_values);
		setItemIdx(-1);
		setDefaultValue('');
	};

	//수정한 버튼을 클릭했을 때 인덱스 값과 텍스트 val 값을 인풋박스에 넣는다.
	const editItem = (idx:number) => {
		setDefaultValue(values[idx].message);
		//내가 선택한 인덱스 값을 알 수 있음 
		setItemIdx(idx);
	};

	//체크박스의 checked의 값이 변경되었을 때 이벤트 실행
	const checkHandled = (e:any, idx:number) =>{
		const _values = clone(values);
		_values[idx].isActive = e.target.checked;
		setValues(_values);
	};
	
	//라디오버튼 checked의 값이 변경되었을 때 이벤트 실행
	const radioHandled = (e : any, idx :number) =>{
		const _values = clone(values);
		_values[idx].status = e.target.value;
		setValues(_values);
	};

	//이벤트가 발생 하면 로컬스토리지에 담아놓은 데이터를 뿌려준다. 
	useEffect(()=>{
		const _strValues = localStorage.getItem('values');
		console.log('-------mounted',_strValues);
		if(_strValues){
			setValues(JSON.parse(_strValues));
		}
		return ()=>{
			console.log('언마운트 완료');
		}
	}, []);	

	const onAllchangeChecked =(is : boolean)=>{
		//전체선택의 checked 값
		setIsAllChecked(is);
		const _values = clone(values);
		//전체 선택이 만약 true일 시 리스트 체크박스 checked도 동일하게 변경
		_values.map((e:any)=> e.isActive = is);
		setValues(_values);
	};

	//선택된 체크박스아이템들만 제거 
	const checkedRemoveItem = () =>{
		//빈배열 선언
		const _values : IValues[] = [];
		//기존 list를 for돌려서 새로만든 _values 에다가 .push를 해준다.
		values.map(e => {
			//체크박스의 checked가 되지 않은것만 _values에 담는다.
			if(!e.isActive){
				_values.push(e);
			}
		});
		setValues(_values);
	};

	return(
		<div className={styles.content}>
			<h1 className={styles.title}>Todo List React</h1>
			<InputText
				text="text"
				error
				placeholder="내용을입력해주세요."
				textValue={defaultValue}
				handleChange = {(e) => setDefaultValue(e)}
				onTypeEnter = {()=>onSubmit()}
			/>
		{
			values.length > 0 ?
			<div>
				<label>
					<input type="checkbox"
						checked={isAllChecked}
						onChange={e=> onAllchangeChecked(e.target.checked)}
					/> 전체선택
				</label> 
			</div> : null
		}
		<div>
			{
				values.length > 0 && values.map((el,idx)=>(
					<div key={`todo${idx}`} className={styles.dFlex}>
						<label key={`label${idx}`}>
							<>
								<input id={`checkbox${idx}`} type="checkbox" checked={el.isActive} onChange={(e)=> checkHandled(e,idx)} />
								{el.message}
							</>
						</label>
						<button style={{marginLeft:10, color:'red'}} onClick={()=>removeItem(idx)}>삭제</button>
						<button style={{marginLeft:10, color:'blue'}} onClick={()=>editItem(idx)}>수정</button>
						<div className={styles.dFlex}>
							<div>
								<input type="radio" id={`ready${idx}`} name={`status${idx}`} value="ready" checked={el.status ==='ready'} onChange={(e)=> radioHandled(e, idx)} />
								<label htmlFor={`ready${idx}`}>준비</label>
							</div>
							<div>
								<input type="radio" id={`doing${idx}`} name={`status${idx}`} value="doing" checked={el.status ==='doing'} onChange={(e)=> radioHandled(e, idx)} />
								<label htmlFor={`doing${idx}`}>진행중</label>
							</div>
							<div>
								<input type="radio" id={`done${idx}`} name={`status${idx}`} value="done" checked={el.status ==='done'} onChange={(e)=> radioHandled(e, idx)} />
								<label htmlFor={`done${idx}`}>완료</label>
							</div>
						</div>
					</div>
				)
				)
			}
		</div>
		<button onClick={()=>checkedRemoveItem()}>지우기</button>
	</div>
	);
};

export default Index;