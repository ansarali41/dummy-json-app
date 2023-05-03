import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="input-group flex-nowrap">
                <span class="input-group-text text-bg-secondary" id="addon-wrapping">@</span>
                <input type="text" class="form-control border-2" placeholder="Type username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary ml-1" type="button" id="button-addon2">Search</button>
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
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main;