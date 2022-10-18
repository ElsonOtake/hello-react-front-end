import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../redux/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
};

export default Greeting;
