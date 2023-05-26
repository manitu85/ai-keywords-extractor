//* Object that holds the color values
const tokens = {
  colors: {
    light: {
      'bg-default': '#023E8A',
      'bg-footer': '#113f66',
      'fg-footer': '#98f0ff',
      'bg-icon': '#a1f0fe',
      'bg-transition': '#2375bd',
      'fg-default': '#dbdbdb', // body text
      'fg-muted': '#cbdff5',
      'fg-accent': '#FFEA00',
      'top-line': '5px solid #90e0ef'
    },
    dark: {
      'bg-default': '#3D348B',
      'bg-footer': '#35155a',
      'fg-footer': '#bb9bff',
      'bg-icon': '#c1a4ff',
      'bg-transition': '#25113d',
      'fg-default': '#F8F9FA', // body text
      'fg-muted': '#cdd6e0',
      'fg-accent': '#fff457',
      'top-line': '5px solid #ae90ef'
    }
  }
};

//* destructured theme values
const { light, dark } = tokens.colors;

//* Chakra UI feature
export const semanticTokens = {
  semanticTokens: {
    colors: {
      'bg-default': {
        default: light['bg-default'],
        _dark: dark['bg-default']
      },
      'bg-footer': {
        default: light['bg-footer'],
        _dark: dark['bg-footer']
      },
      'fg-footer': {
        default: light['fg-footer'],
        _dark: dark['fg-footer']
      },
      'bg-icon': {
        default: light['bg-icon'],
        _dark: dark['bg-icon']
      },
      'bg-transition': {
        default: light['bg-transition'],
        _dark: dark['bg-transition']
      },
      'fg-default': {
        default: light['fg-default'],
        _dark: dark['fg-default']
      },
      'fg-muted': {
        default: light['fg-muted'],
        _dark: dark['fg-muted']
      },
      'fg-accent': {
        default: light['fg-accent'],
        _dark: dark['fg-accent']
      }
    },
    borders: {
      'border-top-line': {
        default: light['top-line'],
        _dark: dark['top-line']
      }
    },
    shadows: {},
    radii: {}
  }
};
