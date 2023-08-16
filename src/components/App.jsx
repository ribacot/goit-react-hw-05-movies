import { useEffect } from 'react';
import movieApi from './service/serviseBaseApi'
export const App = () => {

  useEffect(()=>{movieApi()},[])
  return (
    <div
    >
    </div>
  );
};
