import React from 'react';
import { useState } from 'react';

const Formselectlist = (props) => {
  console.log(props.options)
  // const [formSelectValues, setFormSelectValues] = useState({
  //   student_status_filter:"",
  //   student_status:"",
  //   batch:""
  // })

  // const onChangeformSelectValues = (e) => {
  //   setFormSelectValues({...formSelectValues, [e.target.name]: e.target.value })
  // }

  return (
    <div>
      <select id={props.id}
      className="form-select"
      onChange={props.onChange}
      name={props.name}
      aria-label="Example select with button addon"
    >
    {props.options.map((option)=>
      <option value={option.value}>{option.label}</option>
      )}
    </select>
    </div>
  );
}

export default Formselectlist;
