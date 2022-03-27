// // // import React from 'react';
// // // import Sel from './Select.style';

// // import { useState } from 'react';
// // import styled from 'styled-components';

// // const SelectBoxWrapper = styled.div`
// //   display: flex;
// // `;
// // const IconSVG = styled.svg`
// //   margin-left: -28px;
// //   align-self: center;
// //   width: 24px;
// //   height: 24px;
// // `;

// // // focus 시에 border-color를 red로 변경
// // export const Select = styled.select`
// //   margin: 0;
// //   min-width: 0;
// //   display: block;
// //   width: 100%;
// //   padding: 8px 8px;
// //   font-size: inherit;
// //   line-height: inherit;
// //   border: 1px solid;
// //   border-radius: 4px;
// //   color: inherit;
// //   -webkit-appearance: none;
// //   -moz-appearance: none;
// //   appearance: none;
// //   background-color: transparent;
// //   &:focus {
// //     border-color: red;
// //   }
// // `;
// export default function Selectbox({ option, title, value, name, onBlur }) {
//   // const [userInfo, setUserInfo] = useState('');
//   // console.log(userInfo);
//   // handleInputValue = key => e => {
//   //   setUserInfo({ ...userInfo, [key]: e.target.value });
//   // };

//   return (
//     // <select onChange={() => setData(local.name)}>
//     //   {local.map(option => (
//     //     <option key={option.value} value={option.value} name={option.name}>
//     //       {option.name}
//     //     </option>
//     //   ))}
//     // </select>
//     <select onBlur={event => onBlur(event.target.value)}>
//       {option.map(({ title, value, name }) => {
//         <option id={title} value={value} name={name}>
//           {name}
//         </option>;
//       })}
//     </select>
//   );
// }

// // //https://blog.toycrane.xyz/react%EC%97%90%EC%84%9C-select-box-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-a20e2bf082b2
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
    if (gender === '') {
    }
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
