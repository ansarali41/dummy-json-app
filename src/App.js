import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import './App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: '/user/:id',
            element: <Profile />,
            loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
        },
        {
            path: '/',
            element: <Home />,
        },
    ]);
    return (
        <div className="bg-light app-container">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
