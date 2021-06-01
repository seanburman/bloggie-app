import firebase from '../../firebase/index'
import SignIn from '../../firebase/Authentication'
import { logOut } from '../../redux/user/userHelpers'
import { useState } from 'react'
import './grids.css'
import './Dashboard.css'
import DashboardContent from './DashboardContent'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modals/Modals'

export default function Dashboard() {
    const [openNav, setOpenNav] = useState(false)
    const navState = openNav ? "open" : "closed"
    const rotateToggleButton = openNav ? " rotate180 " : "rotate0 "
    const user = firebase.auth().currentUser

    if(user) {
    return (
        <div className="grid-container-dashboard slide-in">
        {/* Modal available at base for all toasts, image popups, etc. */}
        <Modal/>
        <div 
            className={
                "grid-container-nav bg-gradient dashboard-shadow nav-drawer-open nav-drawer-" + navState
            } 
            tabIndex={-1}>
        <div 
        className="dashboard-logo-toggle-wrapper" 
        onClick={() => setOpenNav(!openNav)}
        role="button"  
        tabIndex="0"
        >
        <img src="/img/logo-white.png" alt="Bloggie" className="dashboard-logo"/>
         <i className={"fas fa-arrow-circle-down nav-toggle-arrow " + rotateToggleButton} />
        </div>
         
         <div className={"dashboard-nav-button-wrapper"}>
            <Link to={`/Dashboard`}>
                <button 
                className={"dashboard-nav-button"}
                onClick={() => setOpenNav(false)}>
                <i className="fas fa-pencil-alt" />
                Blog
                </button>
            </Link>

            <Link to={`/Dashboard/Images`}>
                <button 
                className={"dashboard-nav-button "}
                onClick={() => setOpenNav(false)}>
                <i className="fas fa-image" />
                Images
                </button>
            </Link>
            
            <Link to={`/Dashboard/Settings`}>
                <button 
                className={"dashboard-nav-button"}
                onClick={() => setOpenNav(false)}>
                <i className="fas fa-cog" />
                Settings
                </button>
            </Link>
            
            <Link to={`/Dashboard/Embed`}>
                <button 
                className={"dashboard-nav-button"}
                onClick={() => setOpenNav(false)}> 
                <i className="fas fa-code" />
                Embed
                </button>
            </Link>
            
            <button 
            className="dashboard-nav-button"
            onClick={() => logOut()}
            >
            <i className="fas fa-sign-out-alt" />
            Sign Out
            </button>

         </div>
         <div className="social-media-wrapper">
            <a href="https://www.github.com/seanburman/bloggie-app" target="blank">
                <i className="fab fa-github" />
            </a>
         </div>
        </div>
        <div className="grid-container-dashboard-main dashboard-shadow">
            <div className="top-wrapper">
            <button className="user-info shadow">
            {
                user.displayName
            }
            </button>
            </div>
           <div className="grid-container-dashboard-content-wrapper">
            
           <DashboardContent />
           
           </div>

        </div>
        </div>
    )    
    } else {
       return(<SignIn />) 
    }
    
    
}