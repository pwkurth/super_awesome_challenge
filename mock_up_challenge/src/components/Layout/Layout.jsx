import React from "react";

const Layout = (props) => {
  console.log(props);
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
};

export default Layout;
