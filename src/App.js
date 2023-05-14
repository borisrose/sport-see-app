import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes, 
  BrowserRouter,
  useRouteError,
  Outlet,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import SessionLayout from './layouts/SessionLayout';


function App() {

  const ErrorBoundary= () => {

    let error = useRouteError();
    console.error(error);
    return <div> Erreur 404 </div>
  }


  return (
   <BrowserRouter>

    <Routes>

      <Route path="/" element={<SessionLayout/>}  errorElement={<ErrorBoundary/>}>
        <Route index element={<Dashboard/>} />
      </Route>

    </Routes>
   
   </BrowserRouter>
    
  );
}

export default App;
