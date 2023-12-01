import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions'; // Adjust the path as needed

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <div>{greeting ? <h1>{greeting}</h1> : <p>Loading...</p>}</div>;
};

export default Greeting;
