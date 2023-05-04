import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import GoogleMap from '../../Components/GoogleMap';

const Profile = () => {
    const { firstName, lastName, email, age, image, address, id }: any = useLoaderData();
    const [todos, setTodos] = useState([]);

    // calling api
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}/todos`)
            .then(res => res.json())
            .then(data => {
                setTodos(data?.todos);
            })
            .catch(er => console.log(er));
    }, [id]);

    // if there is atleast one todo when there will be user id if not when back to home
    const path = todos.length > 0 ? `/user/${id}/todos` : `/user/${id}`;

    return (
        <div className="container py-5">
            <div>
                <Link to="/">
                    <button className="btn btn-primary px-3">
                        <FontAwesomeIcon icon={faArrowLeft} className="me-3" />
                        Home
                    </button>
                </Link>
            </div>
            <div className="row pt-5">
                {/*todos and profile image section*/}
                <div className="col-md-3">
                    {/* profile image */}
                    <div className="border border-dark d-flex justify-content-center">
                        <img className="img-fluid w-75" src={image} alt="" />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to={path}>
                            <button className="btn btn-primary px-4">Todo</button>
                        </Link>
                    </div>
                    <div className="bg-white rounded-1 p-3 fw-medium font-monospace">
                        <p className="px-4 fw-bold">
                            List of Todos <br />
                            -------------
                        </p>
                        <ul>
                            {/* user all todos */}
                            {todos.map(({ todo, id }: any) => (
                                <li key={id}>{todo}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*user info and map section*/}
                <div className="col-md-9">
                    {/*user info*/}
                    <table className="table table-striped">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="link-underline-light">{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{age}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/*map section*/}
                    <div className="d-flex justify-content-end">
                        <div>
                            <GoogleMap lat={address?.coordinates?.lat} lng={address?.coordinates?.lng} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
