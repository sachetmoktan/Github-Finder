import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ useris, loading }) => {
        if(loading) {
            return <Spinner />
        }
        else {
            return (
                <div style={userStyle}>  
                    
                    {useris.map(usr => (
                            <UserItem key={usr.id} userz={usr} />  
                    ))}
                </div>
            );
        }
};

Users.PropTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
