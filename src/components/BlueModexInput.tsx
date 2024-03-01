import { Dispatch, FC } from "react";

type Props = {
  isBlue: boolean;
  setIsBlue: Dispatch<boolean>;
};

const BlueModeInput: FC<Props> = ({ isBlue, setIsBlue }) => {
  const handleClick = () => {
    setIsBlue(!isBlue);
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={isBlue} onChange={handleClick} />
        Blue Mode™
      </label>
    </>
  );
};

export default BlueModeInput;
