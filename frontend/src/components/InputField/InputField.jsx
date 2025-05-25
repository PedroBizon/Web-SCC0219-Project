import './InputField.css';

function InputField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  width = '220px', 
  height = '15px' 
}) {
  return (
    <div className="input-field" style={{ width }}>
      <label className="input-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ height }}
      />
    </div>
  );
}

export default InputField;
