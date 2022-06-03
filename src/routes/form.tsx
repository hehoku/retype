import { ChangeEvent, useState } from "react";
const NameForm = () => {
  const [value, setValue] = useState<string>("");

  // e: React.ChangeEvent<HTMLInputElement>
  // e: ChangeEvent<HTMLInputElement>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <label>
        Name
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </label>
    </form>
  );
};

export default NameForm;
