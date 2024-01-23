import { FC } from 'react';
import { BiCart } from "react-icons/bi";

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <BiCart />
    </div>
  );
};
