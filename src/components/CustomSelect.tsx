import React, { FC, useEffect, useRef, useState, useCallback } from 'react';
import Select from 'react-select';
import { colourOptions, stateOptions } from '../services/docs/data.ts';
import { SelectValue } from './bridgeReactSvelte.js';

interface Props {
    forceOpen?: boolean;
    hideImage?: boolean;
}


const CustomSelect = (props: Props) => {
    const [isClearable, setIsClearable] = useState(true);
    const [selectedValue, setSelectedValue] = useState(null);
    
    const handleChange = (selectedOption: any) => {
      setSelectedValue(selectedOption); // Actualiza el estado con el valor seleccionado
      
      SelectValue.selectedValue = selectedOption.label; // Actualiza el valor de la variable
    };
  
    return (
      <>
        <Select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full items-center justify-center"
          id="language-select"
          isClearable={false}
          isSearchable={true}
          value={selectedValue} 
          onChange={handleChange}
          defaultValue={stateOptions[0]}
          name="color"
          options={stateOptions}/><div style={{
            color: 'hsl(0, 0%, 40%)',
            fontSize: 12,
            fontStyle: 'italic',
          }}
        ></div>
      </>
    );
  };
export default CustomSelect;