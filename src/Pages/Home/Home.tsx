import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState<any>(true);
    const [showAll, setShowAll] = useState<any>(false);
    const [search, setSearch] = useState<any>(false);
    const [filteredData, setFilteredData] = useState<any>({});
    const slicedUsers = showAll ? users : users.slice(0, 10);

    // calling api
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data?.users);
                setLoading(false);
            })
            .catch(er => console.log(er));
    }, []);

    // to show all user list
    const handleShowAllClick = () => {
        setShowAll(true);
    };

    // to view only 10 user list
    const handleSliceUser = () => {
        setShowAll(false);
    };

    // for search option, search by first and last name
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const value = e.target.user.value.toLowerCase();
        const filteredUsers = users.filter((user: any) => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(value);
        });
        setSearch(true);
        setFilteredData(filteredUsers);
    };
    return (
        <div className="container pt-5">
            {/*search option*/}
            <div className="row d-flex justify-content-center">
                <div className="col-md-9">
                    <form className="input-group flex-nowrap" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control border"
                            placeholder="Search By Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            name="user"
                        />
                        <button className="btn btn-outline-primary btn-primary ml-1 text-white" type="submit" id="button-addon2">
                            Search <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
            </div>

            {/* if data is loading then showing a spinner */}
            {loading ? (
                <Spinner />
            ) : (
                <div className="mt-4">
                    <h4>LIST OF USERS : </h4>
                    <table className="table table-striped">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {search
                                ? // showing here searched data if searching
                                  filteredData?.map((user: any, i: any) => (
                                      <tr key={i}>
                                          <td>{user?.id}</td>
                                          <td>
                                              <Link to={`/user/${user.id}`} className="link-underline-light">
                                                  {user?.firstName}
                                              </Link>
                                          </td>
                                          <td>{user?.lastName}</td>
                                      </tr>
                                  ))
                                : // showing here 10 user list when not searching or clear searching
                                  slicedUsers?.map((user: any, i: any) => (
                                      <tr key={i}>
                                          <td>{user?.id}</td>
                                          <td>
                                              <Link to={`/user/${user.id}`} className="link-underline-light">
                                                  {user?.firstName}
                                              </Link>
                                          </td>
                                          <td>{user?.lastName}</td>
                                      </tr>
                                  ))}
                        </tbody>
                    </table>

                    {/* this for showing all data or 10 user list */}
                    {search ? null : !showAll ? (
                        <div>
                            <div className="d-flex justify-content-center mb-3">
                                <div>
                                    {/* on click it will show all the data */}
                                    <button className="btn btn-outline-secondary" onClick={handleShowAllClick}>
                                        Show All
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center mb-4">
                            <div>
                                {/* on click it will show 10 user list*/}
                                <button className="btn btn-outline-secondary" onClick={handleSliceUser}>
                                    Show Less
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
