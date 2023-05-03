import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
            .catch(er => console.log(er))
    }, [])

    return (
        <div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text text-bg-secondary" id="addon-wrapping">@</span>
                <input type="text" className="form-control border-2" placeholder="Type username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary ml-1" type="button" id="button-addon2">Search</button>
            </div>
            <div className='mt-4'>
                <h4>LIST OF USERS: </h4>
                <table className="table">
                    <thead>
                        <tr className='table-warning'>
                            <th scope="col">Image</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Location</th>
                            <th scope="col">Todo-List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={i}>
                                <td>
                                    <img src={user?.image} className='user' alt="" />
                                </td>
                                <td>{user?.firstName}</td>
                                <td>{user?.lastName}</td>
                                <td>{user?.email}</td>
                                <td>{user?.age}</td>
                                <td>Lat: {user?.address.coordinates.lat} & Lng:{user?.address.coordinates.lng}</td>
                                <td>todo</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;