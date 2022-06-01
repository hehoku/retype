import { MouseEventHandler, useState } from "react";

interface ClickEvent {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const LoginButton = (props: ClickEvent) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props: ClickEvent) => {
  return <button onClick={props.onClick}>Logout</button>;
};

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button: JSX.Element;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      Log Status: is Login {isLoggedIn ? "true" : "false"}
      {button}
    </div>
  );
};

export default LoginControl;
