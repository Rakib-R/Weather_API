import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Login() {

const { loginWithRedirect } = useAuth0();

  return (
    <div className='text-center text-lg font-mono mt-10'>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => loginWithRedirect()}>
      Login
      </button>
    </div>
  )
}

export default Login