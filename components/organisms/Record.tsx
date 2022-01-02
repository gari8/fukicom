import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

// interface Recording {
// 	ts: number;
// 	blobUrl: string;
// 	mimeType: string;
// 	size: number;
// }

export default function Record(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose()}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>aadfafdfas</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose()}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
