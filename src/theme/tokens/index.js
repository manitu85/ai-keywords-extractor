//* Object that holds the color values
const tokens = {
  colors: {
    light: {
      'bg-default': '#023E8A',
      'bg-footer': '#113f66',
      'fg-default': '#dbdbdb', // body text
      'fg-muted': '#57606a',
      'fg-accent': '#FFEA00',
      'border-top-line': '5px solid #90e0ef'
    },
    dark: {
      'bg-default': '#3D348B',
      'bg-footer': '#35155a',
      'fg-default': '#F8F9FA', // body text
      'fg-muted': '#c0c9d2',
      'fg-accent': '#ffc926',
      'border-top-line': '5px solid #ae90ef'
    }
  }
};

//* Chakra UI feature
export const semanticTokens = {
  semanticTokens: {
    colors: {
      'bg-default': {
        default: tokens.colors.light['bg-default'],
        _dark: tokens.colors.dark['bg-default']
      },
      'bg-footer': {
        default: tokens.colors.light['bg-footer'],
        _dark: tokens.colors.dark['bg-footer']
      },
      'fg-default': {
        default: tokens.colors.light['fg-default'],
        _dark: tokens.colors.dark['fg-default']
      },
      'fg-muted': {
        default: tokens.colors.light['fg-muted'],
        _dark: tokens.colors.dark['fg-muted']
      },
      'fg-accent': {
        default: tokens.colors.light['fg-accent'],
        _dark: tokens.colors.dark['fg-accent']
      }
    },
    borders: {
      'border-top-line': {
        default: tokens.colors.light['border-top-line'],
        _dark: tokens.colors.dark['border-top-line']
      }
    }
  }
};
