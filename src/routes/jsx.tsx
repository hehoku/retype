interface User {
  firstName: string;
  lastName: string;
}

const Jsx = () => {
  const formatName = (user: User): string => {
    return user.firstName + " " + user.lastName;
  };

  const user: User = {
    firstName: "Hehoku",
    lastName: "Y",
  };

  const element: JSX.Element = <h2>Hello, {formatName(user)}</h2>;

  return <div>{element}</div>;
};

export default Jsx;
