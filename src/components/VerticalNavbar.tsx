import * as React from 'react';
import {RouteComponentProps} from "react-router";
import './VerticalNavbar.scss';
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/Menu/MenuItem";
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
  // let location = props.location.pathname;
  return (
    <Drawer
      type="persistent"
      open={props.opened}
    >
      <MenuItem>Menu Item</MenuItem>
      <MenuItem/>

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
