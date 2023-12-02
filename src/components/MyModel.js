import { Modal ,ModalBody,ModalFooter,ModalHeader } from "reactstrap";


export const MyModal=({
    isOpen=false,
    toggle =()=>{},
    title='title',
    children,
    modalFooter=<></>
})=>{
    return(<Modal
        isOpen={isOpen}
        toggle={toggle}
    >
        <ModalHeader toggle={toggle} >
            {title}
        </ModalHeader>
        <ModalBody>
            {children}
        </ModalBody>
        <ModalFooter>
            {modalFooter}
        </ModalFooter>
    </Modal>)
}
