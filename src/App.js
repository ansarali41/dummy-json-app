import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/user/:id',
      element: <Profile></Profile>,
      loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`)
    },
    {
      path: '/',
      element: <Home></Home>
    },
  ])
  return (
    <div className="container mt-3">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
