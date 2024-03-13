import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './features/gitUserSlice';

function App() {
  const dispatch = useDispatch();
  // const data= useSelector((state)=>state.app;
  const data = useSelector((state) => state.app);

  if (data.loading) {
    return <h3>Loading...</h3>
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>
  }
  return (
    <div className="App">
      <h4>hello</h4>
      <button onClick={() => dispatch(getAllData())}>get users</button>
      {data.users.map((ele) => (
        <li key={ele.id}>{ele.login}</li>
      ))}
    </div>
  );
}

export default App;
