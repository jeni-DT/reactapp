import React from 'react';
import { AuthContext } from './Provider';
const Login = (props) => {
  const { authState, authActions } = React.useContext(AuthContext);

  const login = () => {
    authActions. authStateChanged({ name: "Jeni" });
  }

  return (
    <div>
      {authState.user.name}
      <button onClick={() => login()}>
        Login
      </button>
    </div>
  );
};
export default Login