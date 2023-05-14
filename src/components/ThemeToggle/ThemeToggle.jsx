import { IconButton, useColorMode } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IconContext.Provider value={{ size: '24px', color: '#fff' }}>
      <IconButton
        color='current'
        variant='outline'
        aria-label={`Switch to ${colorMode} mode`}
        icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
        onClick={toggleColorMode}
        _hover={{ background: 'none' }}
      />
    </IconContext.Provider>
  );
};

export default ThemeToggle;
