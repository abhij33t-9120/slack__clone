import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, Loop, PeopleAlt } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { useStateValue } from '../StateProvider'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
const [channels,setChannels]=useState([])
const [{user}]=useStateValue()
const [loading, setLoading] = useState("")

useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot => {
        setChannels(
            snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    name:doc.data().name
                }
            ))
        )
    })
},[])

useEffect(() => {
    if (!channels.length)
        setLoading(<SidebarOption Icon={Loop} title="Loading..." />)
    else setLoading("")
}, [channels])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                <h2>Slack Clone</h2>
                <h3>
                    <FiberManualRecord />
                    {user?.displayName}
                </h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={InsertComment} title='Threads'/>
            <SidebarOption Icon={Inbox} title='Mention & reactions'/>
            <SidebarOption Icon={Drafts} title='Saved items'/>
            <SidebarOption Icon={BookmarkBorder} title='Channel browser'/>
            <SidebarOption Icon={PeopleAlt} title='People & User groups'/>
            <SidebarOption Icon={Apps} title='Apps'/>
            <SidebarOption Icon={FileCopy} title='File browser'/>
            <SidebarOption Icon={ExpandLess} title='Show less'/>
            <hr />
            <SidebarOption Icon={ExpandMore} title='Channels'/>
            <hr />
            <SidebarOption Icon={Add} addChannelOption title='Add Channel'/>

            {/* connect to db and list all Channels */}
            {/* SidebarOption */}
            {loading || channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar
