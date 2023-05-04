import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Todo = () => {
    const { todos }: any = useLoaderData();

    // if there is atleast one todo when there will be user id if not when back to home
    const path = todos.length > 0 ? `/user/${todos[0]?.userId}` : '/';

    return (
        <div className="container pt-5 font-monospace">
            <div>
                <Link to={path}>
                    <button className="btn btn-primary px-3">
                        <FontAwesomeIcon icon={faArrowLeft} className="me-3" />
                        Profile
                    </button>
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="bg-white rounded-1 p-3 fw-medium">
                        <h2 className="px-4 fw-bold text-center">
                            List of Todos <br />
                            -------------
                        </h2>
                        <ul>
                            {/* user all todos */}
                            {todos.map(({ todo, id }: any) => (
                                <li className="fs-5" key={id}>
                                    {todo}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
