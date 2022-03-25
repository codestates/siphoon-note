import { SelectBoxWrapper, Select1, IconSVG } from './Select.style';

export default function Select(props) {
  const handleChange = e => {
    // event handler
    console.log(1);
    console.log(e.target.value);
  };

  return (
    <SelectBoxWrapper>
      <Select1 onChange={handleChange}>
        {props.options.map(option => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </Select1>
      <IconSVG
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 14L16 6H4L10 14Z"
          fill="#1A1A1A"
        />
      </IconSVG>
    </SelectBoxWrapper>
  );
}
