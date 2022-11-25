import React from 'react';
import cl from './SortSelect.module.css';

export default function SortSelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <span>Сортировать по: </span>
      <select
        className={cl.sortSelect}
        value={value}
        onChange={event => onChange(event.target.value)}>
        <option value='' disabled>
          {defaultValue}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
