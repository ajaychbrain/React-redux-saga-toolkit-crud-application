import './App.css';
import MyForm from './Components/MyForm';
import MyTable from './Components/MyTable';

function App() {
  return (
  <div className="container">
  <div class="row">
    <div className="col">
        <MyForm/>
    </div>
    <div className="col">
    <MyTable/>
    </div>
    
  </div>
</div>
  );
}

export default App;
