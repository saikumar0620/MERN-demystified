// // features/counter/Counter.jsx
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from './Counterslice'

// export default function Counters() {
//   // useSelector → reads a value from the global store
//   const count = useSelector((state) => state.counter.value);

//   // useDispatch → gives you the dispatch function
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(reset())}>Reset</button>
//     </div>
//   );
// }