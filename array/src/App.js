import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ArrayPage from './components/arrayPage';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<ArrayPage/>} >
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
