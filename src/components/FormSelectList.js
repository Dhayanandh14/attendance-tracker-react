import React from 'react';
const Formselectlist = (props) => {
  return (
    <div>
      <select id={props.id}
      className="form-select"
      onChange={props.onChange}
      name={props.name}
      aria-label="Example select with button addon"
    >
    {props.options.map((option)=>
      <React.Fragment key={option.value}>
      <option value={option.value}>{option.label}</option>
      </React.Fragment>
      )}
    </select>
    </div>
  );
}

export default Formselectlist;
