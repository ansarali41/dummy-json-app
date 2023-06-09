import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
