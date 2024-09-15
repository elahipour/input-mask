/* eslint-disable react/prop-types */
const Input = ({handleChange,handleTabKey, hint,input}) => {

  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
      value={input}
        type="text"
        id="input"
        onChange={handleChange}
        onKeyDown={handleTabKey}
      />
    </div>
  );
};

export default Input;