import React from 'react';

export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  width = '100%',    // take full width of parent
  height = '48px',    // match your design
}) {
  return (
    <div style={{ width }} className="flex flex-col mb-4">
      <label className="text-gray-600 text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ height }}
        className="w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

