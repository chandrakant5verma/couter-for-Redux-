import './App.css'
import { useSelector,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions/index';



function App() {
  const dispach = useDispatch();
  const myStore = useSelector((state)=> state.CountNumber);
  return (
    
    <div className='container'>
      <h1>the counter</h1>
      <div className="inbox">
        <button className="inbox-plus" onClick={()=> dispach(decNumber())}><span>-</span></button>
        <textarea className='inbox-text' value={myStore}></textarea>
        <button className='inbox-minus'onClick={()=> dispach(incNumber())}><span>+</span></button>
      </div>
    </div>)
}
export default App;