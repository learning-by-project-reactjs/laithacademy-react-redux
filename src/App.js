import { bindActionCreators } from 'redux'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from './state'

function App() {
  const state = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)


  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App
