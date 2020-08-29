import React from 'react';

const UserIcon = ({url}) => {
    return(
            <img src={url} className="user-img-style" alt={url} />
    )
}

export default UserIcon;