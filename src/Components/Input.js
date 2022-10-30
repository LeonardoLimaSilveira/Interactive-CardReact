import React from 'react'

const Input = ({ label, id, value, setValue, type, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  )
}

export default Input
