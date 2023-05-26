import { ListIcon, ListItem as ChakraListItem } from '@chakra-ui/react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ListItem = ({ title }) => {
  return (
    <ChakraListItem display='inline-flex' alignItems='center'>
      <ListIcon
        as={BsFillPatchCheckFill}
        color='green.500'
        alignSelf='flex-start'
        transform='translateY(5px)'
      />{' '}
      {title} &nbsp;
    </ChakraListItem>
  );
};
export default ListItem;

// Todo: Make full component with <List />
