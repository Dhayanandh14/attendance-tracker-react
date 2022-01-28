import React from 'react';

const Label = (props) => {
  const {htmlFor,className,label} = props
  return (
    <div>
      <label htmlFor={htmlFor} className={className}>{label}</label>
    </div>
  );
}

export default Label;
