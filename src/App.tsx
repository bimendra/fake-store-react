import { FC } from 'react';
import { BiCart } from "react-icons/bi";

import Header from './components/Header';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>      
      <Header />
    </div>
  );
};
