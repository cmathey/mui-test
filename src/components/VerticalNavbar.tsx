import * as React from 'react';
import {RouteComponentProps} from "react-router";
import {NavLink} from "react-router-dom";
import './VerticalNavbar.scss';
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import {DASH_PATH, SETUP_PATH} from "../Path";
// import IconButton from "material-ui/IconButton";

// const styles = {
//
//   largeIcon: {
//     width: 60,
//     height: 60,
//   },
//
// };

// noinspection SpellCheckingInspection
export default (props: {
  opened: boolean
  children?: React.ReactNode;
} & RouteComponentProps<{}>) => {
  let location = props.location.pathname;
  return (
    <Drawer open={props.opened} width={128} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem
        containerElement={<NavLink to={'/'} isActive={() => location === DASH_PATH} />}
        leftIcon={<DashboardIcon/>}
      />
      <MenuItem
        containerElement={<NavLink to={SETUP_PATH} isActive={() => location === SETUP_PATH} />}
        primaryText="Setup"

        checked={location === SETUP_PATH}
        leftIcon={<DashboardIcon/>}
      />
    </Drawer>
  );
  // return <div className="vertbar">
  //   <nav className="navbar navbar-inverse navbar-fixed">
  //     <div className="container-fluid">
  //       {/* Sidebar Menu Items - These collapse to the responsive navigation menu on small screens */}
  //       <div className="collapse navbar-collapse navbar-ex1-collapse">
  //         <ul className="nav navbar-nav nav-pills nav-stacked side-nav">
  //           <li>
  //             <Header title={messages.title}/>
  //           </li>
  //           <li className={location === DASH_PATH ? "active" : ""}>
  //             <Link to={DASH_PATH}>
  //               <i className="fa fa-fw fa-dashboard"/>
  //               <span>Dashboard</span>
  //             </Link>
  //           </li>
  //           <li className={location === USERS_PATH ? "active" : ""}>
  //             <Link to={USERS_PATH}>
  //               <i className="fa fa-fw fa-users"/>
  //               <span>Users</span>
  //             </Link>
  //           </li>
  //           <li className={location === ENTITIES_PATH ? "active" : ""}>
  //             <Link to={ENTITIES_PATH}>
  //               <i className="fa fa-fw fa-bank"/>
  //               <span>Entities</span>
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // </div>;
};
