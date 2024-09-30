import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Students from '../pages/Students';
import CreateStudent from '../pages/CreateStudent';
import Test from '../pages/Test';
import ReduxTest from '../pages/ReduxTest';
import AddProduct from '../pages/AddProduct';
import ListProducts from '../pages/ListProducts';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/students',
    element: <Students />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/redux',
    element: <ReduxTest />,
  },
  {
    path: '/students/create',
    element: <CreateStudent />,
  },
  {
    path: '/products',
    element: <ListProducts />,
  },
  {
    path: '/products/create',
    element: <AddProduct />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
