import { ListIcon, ListItem } from '@chakra-ui/react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ListItemComponent = ({ title }) => {
  return (
    <ListItem display='inline-flex' alignItems='center'>
      <ListIcon
        as={BsFillPatchCheckFill}
        color='green.500'
        alignSelf='flex-start'
        transform='translateY(5px)'
      />{' '}
      {title} &nbsp;
    </ListItem>
  );
};
export default ListItemComponent;
