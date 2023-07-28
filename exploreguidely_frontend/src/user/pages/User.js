import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Ashish Gupta',
            image: 'https://media.licdn.com/dms/image/D5603AQHX2cA61yljlQ/profile-displayphoto-shrink_800_800/0/1677303951316?e=2147483647&v=beta&t=rW7CXkN3_YSPoBIm4OYz4tJbCDXgdrw582bEytjHMqY',
            places: 3
        }
    ];



    return <UsersList items={USERS} />;
}

export default Users;