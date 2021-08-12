import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
import { useStateValue } from '../StateProvider'



function Header() {
    const [{user}]=useStateValue();
    return (
        <div className='header'>
            <div className="header_left">
                {/* avatars for logged in users */}
                <Avatar 
                className='header_avatar'
                alt={user?.displayName}
                src={user?.photoURL}/>
                {/* time icon */}
                <AccessTime />
            </div>
            <div className="header_search">
                {/* Search Icon
                input */}
                <Search />
                <input placeholder='Search Chat' />
            </div>
            <div className="header_right">
                {/* help icon */}
                <HelpOutline /> 
            </div>
        </div>
    )
}

export default Header
