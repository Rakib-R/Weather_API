
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


const LogoutButton = () => {
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();


  return (
    <button className="{isAuthenticated} ?bg-blue-500 : bg-grey-500 
    {isAuthenticated} ?hover:bg-blue-700 :hover:bg-grey-100 font-black py-2 px-4 rounded-full"
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;