// BaseNode.js

import { Handle, Position } from 'reactflow';
import { useState } from 'react';

const BaseNode = ({ 
  id, 
  title, 
  children, 
  handles, 
  inputProps, 
  outputProps 
}) => {
  const [currName, setCurrName] = useState(inputProps?.defaultValue || '');
  const [currType, setCurrType] = useState(inputProps?.type || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    inputProps?.onChange?.(e.target.value); // Call external handler if provided
  };

  const handleTypeChange = (e) => {
    setCurrType(e.target.value);
    outputProps?.onChange?.(e.target.value); // Call external handler if provided
  };

  return (
    <div style={{ 
      width: 250, 
      height: 80, 
      border: '1px solid black',
      borderRadius: '8px',
      padding: '1rem',
      background: '#fff' 
    }}>
      {handles.map(({ type, position, id: handleId, style }, index) => (
        <Handle
          key={index}
          type={type}
          position={position}
          id={handleId}
          style={style}
        />
      ))}
      <div>
        <span>{title}</span>
      </div>
      {children}
      {inputProps && (
        <div style={{ marginTop: '1rem' }}>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label>
            Type:
            <select value={currType} onChange={handleTypeChange}>
              {inputProps.types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default BaseNode;
