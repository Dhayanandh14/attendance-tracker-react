import React from 'react';
const FormInput = (props) => {

  return (
    <div>
        <input
        type={props.type}
        name={props.name}
        className="form-control"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormInput;
