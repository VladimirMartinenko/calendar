import React from 'react';
import { format } from 'date-fns/esm';

const AddDate = (props) => {

  const [i]=props
  return (
    <>
     {format(i, "d")} 
    </>
  );
}

export default AddDate;
