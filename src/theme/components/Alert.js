export const Alert = {
  variants: {
    // define own toast variant
    toastError: {
      container: {
        color: 'gray.50',
        bg: 'red.500'
        // borderRightColor: '2px solid red.200'
      }
    },
    toastSuccess: {
      container: {
        color: 'gray.50',
        bg: 'green.600'
        // borderRightColor: '2px solid red.200'
      }
    }
  },
  defaultProps: {
    variant: 'left-accent'
  }
};
