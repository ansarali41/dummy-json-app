import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
const Home = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [showAll, setShowAll] = useState(false);
    const [search, setSearch] = useState(false)
    const [filteredData, setFilteredData] = useState({})
    const slicedUsers = showAll ? users : users.slice(0, 10);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }, [])
    const handleShowAllClick = () => {
        setShowAll(true);
    };
    const handleSliceUser = () => {
        setShowAll(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.user.value.toLowerCase();
        const filteredUsers = users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(value);
        });
        setSearch(true)
        setFilteredData(filteredUsers);
    }
    return (
        <div>
            <form className="input-group flex-nowrap" onSubmit={handleSubmit}>
                <span className="input-group-text text-bg-secondary" id="addon-wrapping">@</span>
                <input type="text" className="form-control border" placeholder="Type username" aria-label="Recipient's username" aria-describedby="button-addon2" name='user' />
                <button className="btn btn-outline-secondary ml-1" type="submit" id="button-addon2">Search</button>
            </form>
            {
                loading ? <Spinner></Spinner>
                    :
                    <div className='mt-4'>
                        <h4>LIST OF USERS : </h4>
                        <table className="table">
                            <thead>
                                <tr className='table-warning'>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    search ?
                                        filteredData?.map((user, i) => <tr key={i}>
                                            <td>
                                                {user.id}
                                            </td>
                                            <td><Link to={`/user/${user.id}`} className='link-underline-light'>{user?.firstName}</Link></td>
                                            <td>{user?.lastName}</td>
                                        </tr>)
                                        :
                                        slicedUsers?.map((user, i) => <tr key={i}>
                                            <td>
                                                {user.id}
                                            </td>
                                            <td><Link to={`/user/${user.id}`} className='link-underline-light'>{user?.firstName}</Link></td>
                                            <td>{user?.lastName}</td>

                                        </tr>)
                                }
                            </tbody>
                        </table>
                        {
                            search ? '' : !showAll ? (
                                <div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <div>
                                            <button className='btn btn-outline-secondary' onClick={handleShowAllClick}>Show All</button>
                                        </div>
                                    </div>
                                </div>
                            ) : <div className='d-flex justify-content-center mb-4'>
                                <div>
                                    <button className='btn btn-outline-secondary' onClick={handleSliceUser}>Show Less</button>
                                </div>
                            </div>

                        }
                    </div>
            }
        </div >
    );
};

export default Home;