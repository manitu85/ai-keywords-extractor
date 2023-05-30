/* eslint-disable react/destructuring-assignment */
import { chakra, Select as ChakraSelect } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';

export default function Select({ options, placeholder, value, handler }) {
  // console.log('OPTIONS', options);
  return (
    <ChakraSelect
      icon={<MdArrowDropDown />}
      bg='bg-footer'
      borderColor='fg-footer'
      color='fg-footer'
      variant='outline'
      placeholder={placeholder}
      value={value}
      onChange={handler}
    >
      {options.map(({ id, val, option }) => (
        <chakra.option key={id} value={val} bg='bg-footer !important'>
          {option}
        </chakra.option>
      ))}
    </ChakraSelect>
  );
}
