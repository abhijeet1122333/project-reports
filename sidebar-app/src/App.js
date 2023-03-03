import './App.css';
import Sidebar from './sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MultiLineChart from './components/MultiLineChart'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
return (
<Router>
<div className="App">
<Sidebar />
</div>
</Router>
);
}
export default App;
