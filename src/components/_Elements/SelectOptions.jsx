/* eslint-disable react/destructuring-assignment */
import { chakra, Select } from '@chakra-ui/react';

export default function SelectOptions(handler, args) {
  const obj = args;
  console.log(' OBJ', obj);
  return (
    <Select placeholder='Select tone of voice' onChange={handler}>
      {obj.map(({ id, value, option }) => (
        <option key={id} value={value}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export function SelectOption({ id, value, option }) {
  return (
    <chakra.option key={id} value={value}>
      {option}
    </chakra.option>
  );
}
// Todo:  <SelectOptions obj={AI_TONE} />
