//* Object that holds the color values
const tokens = {
  colors: {
    light: {
      'bg-default': '#023E8A',
      'bg-footer': '#113f66',
      'fg-footer': '#98f0ff',
      'bg-icon': '#fff',
      'bg-transition': '#2375bd',
      'fg-default': '#dbdbdb', // body text
      'fg-muted': '#cbdff5',
      'fg-accent': '#FFEA00',
      'border-top-line': '5px solid #90e0ef'
    },
    dark: {
      'bg-default': '#3D348B',
      'bg-footer': '#35155a',
      'fg-footer': '#bb9bff',
      'bg-icon': '#fff',
      'bg-transition': '#25113d',
      'fg-default': '#F8F9FA', // body text
      'fg-muted': '#cdd6e0',
      'fg-accent': '#fff457',
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
      'fg-footer': {
        default: tokens.colors.light['fg-footer'],
        _dark: tokens.colors.dark['fg-footer']
      },
      'bg-icon': {
        default: tokens.colors.light['bg-icon'],
        _dark: tokens.colors.dark['bg-icon']
      },
      'bg-transition': {
        default: tokens.colors.light['bg-transition'],
        _dark: tokens.colors.dark['bg-transition']
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
    },
    shadows: {},
    radii: {}
  }
};
