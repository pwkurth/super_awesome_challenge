import React from "react";

const Layout = (props) => {
  if (props?.landing) {
    return <>{props.landing}</>;
  }
  if (props?.home) {
    return (
      <>
        {props.nav}
        {props.home}
      </>
    );
  }
  if (props?.csv) {
    return (
      <>
        {props.nav}
        {props.csv}
      </>
    );
  }
};
export default Layout;
