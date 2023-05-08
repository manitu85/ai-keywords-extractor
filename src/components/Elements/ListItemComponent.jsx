import { ListIcon, ListItem } from '@chakra-ui/react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ListItemComponent = ({ title }) => (
  <ListItem display='inline-flex' alignItems='center'>
    {' '}
    <ListIcon as={BsFillPatchCheckFill} color='green.500' />
    {title}{' '}
  </ListItem>
);

export default ListItemComponent;
