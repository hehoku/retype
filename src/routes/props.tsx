interface WelcomePropsType {
  name: string;
}

const Welcome = (props: WelcomePropsType): JSX.Element => {
  return <h1>Hello, {props.name}</h1>;
};

const PropElement = () => {
  return (
    <div>
      <Welcome name="Hehoku" />
      <Welcome name="Y" />
      <pre>
        <code>
          {`
        interface WelcomePropsType {
          name: string;
        }

        const Welcome = (props: WelcomePropsType): JSX.Element => {
         return <h1>Hello, {props.name}</h1>;
        };`}
        </code>
      </pre>
    </div>
  );
};

export default PropElement;
