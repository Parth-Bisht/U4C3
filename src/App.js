
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './Components/context/AuthContext';

import Mainroutes from "./Components/Routes/MainRoutes";
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
    <BrowserRouter>
    <Mainroutes/>
    </BrowserRouter>
    </AuthContextProvider>
    </div>
  );
}
export default App;
