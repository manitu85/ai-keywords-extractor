import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function useBetterToast() {
  // eslint-disable-next-line unicorn/no-useless-undefined
  const [toastState, setToastState] = useState(undefined);
  const toast = useToast();

  useEffect(() => {
    if (toastState) {
      const { message, description, status, variant } = toastState;

      toast({
        title: message,
        description,
        status,
        variant
      });
    }

    //* Cleanup
    return toast.close();
  }, [toastState, toast]);

  //* Toast func.
  const successToast = ({ message, description }) => {
    setToastState({ message, description, variant: 'toastSuccess', status: 'success' });
  };

  const errorToast = ({ message, description }) => {
    setToastState({ message, description, variant: 'toastError', status: 'error' });
  };

  // const infoToast = ({ message, description }) => {};

  // const warningToast = ({ message, description }) => {};

  // return { successToast, errorToast };
  // returned array + obj. named args/properties syntax
  return [{ successToast, errorToast }, toastState, setToastState];
}

// Usage
// const [{successToast, errorToast}, settings, newToast] = useBetterToast();

// toast default options >> theme provider
// duration: 2500,
// position: position || 'top',
// isClosable: true
