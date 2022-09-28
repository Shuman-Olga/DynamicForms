import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import DynamicForms from './components/DynamicForms';
import Header from './components/Header';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <DynamicForms />
    </div>
  );
}

export default App;
