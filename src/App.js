import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes, 
  BrowserRouter,
  useRouteError,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';


function App() {

  const ErrorBoundary= () => {

    let error = useRouteError();
    console.error(error);
    return <div> Erreur 404 </div>
  }


  return (
   <BrowserRouter>

    <Routes>

      <Route path="/" element={<Dashboard/>}  errorElement={<ErrorBoundary/>}/>


    </Routes>
   
   </BrowserRouter>
    
  );
}

export default App;
