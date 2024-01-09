import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { countState } from '~/store/recoil'; // Recoil 상태를 가져옴

import './main.scss';

export default () => {
  const [count, setCount] = useRecoilState(countState);

  const [id, setId] = useState<string>('');

  const addCount = () => setCount(count + 1);
  const removeCount = () => setCount(count - 1);

  const a: ITest = { a: '123123' };

  useEffect(() => {
    console.log('count:', count);
    return () => {
      console.log('unmount');
    };
  }, [count]);

  return (
    <div className="main">
      <div>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <Link to={`/ids/${id}`}>가자</Link>
      </div>

      <div className="count">
        <button onClick={() => addCount()}>+</button>
        <button onClick={() => removeCount()}>-</button>
        <span>{count}</span>
      </div>
    </div>
  );
};
