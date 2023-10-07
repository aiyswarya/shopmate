import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './Components';
import { AllRoutes } from './Routes/AllRoutes';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <AllRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
