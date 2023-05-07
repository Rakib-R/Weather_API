import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./Logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <span className="absolute top-5 right-40 flex flex-row gap-3">
        <div className="absolute top-16 left-30 w-48 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"></div>

        <img className="rounded-lg" width={50} height={50} src={user.picture} alt={user.name} />
        <h2 className="relative top-2">{user.name}</h2>
        <p className="relative top-2">{user.email}</p>
      </span>
    ) : 
      <div className="absolute top-3 right-40 flex flex-row gap-3">
      <LogoutButton/>

      </div>
  );
};

export default Profile;