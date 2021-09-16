import React from 'react'; //useState to add state to functional components, useEffect like component did mount. 
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import NoteApp from './components/NoteApp'

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// const App = (props) => {
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.log('This should only run once')
//   }, [])

//   useEffect(() => {
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(props.count)}>Reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }




