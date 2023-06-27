import React from 'react'
import './User.css'
import Icon from '@mdi/react';
import { mdiAccountStarOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/UserAndPassword`)}>
            <Icon className='user-icon' path={mdiAccountStarOutline} size={2} />
        </div>
    )
}

export default User