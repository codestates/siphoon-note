import React from 'react';
import { Select, Input } from './Select.style';

export function Selectbox({ options, select, setSelect }) {
  const handleSelect = e => {
    setSelect(e.target.value);
  };
  console.log(options);
  return (
    <Select value={select} onChange={handleSelect}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export function Selectbox2({ gender, setGender, options }) {
  const handleSelect2 = e => {
    setGender(e.target.value);
  };
  console.log(options[3]);
  return (
    <div>
      <Select value={gender} onChange={handleSelect2}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      {gender === '사용자 지정' ? (
        <Input
          type="text"
          placeholder="직접 입력해주세요."
          onBlur={handleSelect2}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
