import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';

export const MultiSelect = ({ options, onChange }) => {
  const [animal, setAnimal] = useState(null);

  const handleChange = (value) => {
    console.log('value:', value);
    setAnimal(value);
    onChange(value);
  };
  return (
    <Select
      isMultiple={true}
      value={animal}
      onChange={handleChange}
      options={options}
      classNames={{
        menuButton: ({ isDisabled }) =>
          `flex text-sm text-green-500 bg-gray-900 border border-gray-600 rounded shadow-sm transition-all duration-300 focus:outline-none ${
            isDisabled
              ? 'bg-gray-200'
              : 'bg-gray-900 hover:border-gray-400 focus:border-green-500 focus:ring focus:ring-green-500/20'
          }`,
        menu: 'absolute z-10 w-full bg-gray-950 shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700',
        listItem: ({ isSelected }) =>
          `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
            isSelected ? `text-white bg-blue-500` : `text-green-500 hover:bg-blue-100 hover:text-blue-500`
          }`,
      }}
    />
  );
};
