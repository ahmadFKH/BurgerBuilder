import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Auxi'

const ErrorHandler = (WrappedComp) => {
    return (props) => {
        return (
            <Aux>
                <Modal>
                    Somthing wrong
                </Modal>
                <WrappedComp {...props}></WrappedComp>
            </Aux>
        )
    }
}

export default ErrorHandler;
