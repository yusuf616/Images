import { Modal ,ModalBody,ModalHeader } from "reactstrap";


export const MyModal=({
    isOpen=false,
    toggle =()=>{},
    title='title',
    children
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
    </Modal>)
}
