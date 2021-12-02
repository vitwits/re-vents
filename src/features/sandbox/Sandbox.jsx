import { Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply } from './testReducer';

const Sandbox = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.test.data);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button onClick={() => dispatch(increment(10))} content='Increment' color='green' />
      <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red' />
      <Button onClick={() => dispatch(multiply(10))} content='Multiply' color='yellow' />
      
    </>
  )
}

export default Sandbox