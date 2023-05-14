import {
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';

const KeywordsModal = ({ loading, keywords, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg='bg-footer'>AI Extracted Keywords</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' alignItems='center' justifyContent='center' bg='bg-default'>
          {loading ? (
            <CircularProgress isIndeterminate color='brand.500' />
          ) : (
            <Text>{keywords}</Text>
          )}
        </ModalBody>

        <ModalFooter bg='bg-footer'>
          <Button colorScheme='blue' variant='solid' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default KeywordsModal;
