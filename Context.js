import {Children, createContext, useState} from 'react';

export const Appcontext = createContext(null)

export function Context({children}) {

  const [data, setdata] = useState(['Hi this is Yash Sinha']);
  // ek value par search hoga uska according search karenge
  const [hotnew, sethotnew] = useState([]);
  const [search, setsearch] = useState('');
  const[loading , setloading] = useState(false)
  const [markindex , setmarkindex] = useState(-1)

  return (
    <Appcontext.Provider
      value={{
        data,
        setdata,
        hotnew,
        sethotnew,
        search,
        setsearch,
        loading ,
        setloading,
        markindex , 
        setmarkindex
      }}>{children}</Appcontext.Provider>
  );
}




