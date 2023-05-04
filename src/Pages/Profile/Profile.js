import React, {useEffect, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import './Profile.css'
import GoogleMap from "../../Components/GoogleMap";

const Profile = () => {
    const {firstName, lastName, email, age, image, address, id} = useLoaderData();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}/todos`)
            .then(res => res.json())
            .then(data => {
                setTodos(data?.todos);
            })
            .catch(er => console.log(er))
    }, [id]);

    console.log('todos', todos)

    return (
        <div className="container pt-5">
            <div className="row pt-5">
                {/*todos and profile image section*/}
                <div className="col-md-3">
                    <div className="border border-dark d-flex justify-content-center">
                        <img className="img-fluid w-75" src={image} alt=""/>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <h6 className="text-center  todo-title text-white px-4 py-2 mt-2">Todo</h6>
                    </div>
                    <div className="bg-white rounded-1 p-3 fw-medium">
                        <p className="px-4 fw-bold">List of Todos <br/>
                            -------------
                        </p>
                        <ul>
                            {todos.map(({todo, id}) =>
                                (<li key={todo?.id}>{todo}</li>)
                            )}
                        </ul>
                    </div>
                </div>

                {/*user info and map section*/}
                <div className="col-md-9">
                    {/*user info*/}
                    <table className="table table-striped">
                        <thead>
                        <tr className='table-primary'>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='link-underline-light'>{firstName}</td>
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