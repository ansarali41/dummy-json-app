import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Todo from './Pages/Todo/Todo';

function App() {
    // all the route is here
    const router = createBrowserRouter([
        {
            path: '/user/:id',
            element: <Profile />,
            loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
        },
        {
            path: '/user/:userId/todos',
            element: <Todo />,
            loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.userId}/todos`),
        },
        {
            path: '/',
            element: <Home />,
        },
    ]);
    return (
        <div className="bg-light min-vh-100">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
