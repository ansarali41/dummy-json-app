import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
    const { firstName, lastName, email, age, image, address } = useLoaderData()
    return (
        <div>
            hello {firstName}
        </div>
    );
};

export default Profile;