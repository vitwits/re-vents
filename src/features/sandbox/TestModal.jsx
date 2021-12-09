import React from 'react'
import ModalWrapper from '../../app/common/modals/ModalWrapper';

const TestModal = ({data}) => {
  return (
    <ModalWrapper size='mini' header='Test Modal'>
      <div>The date is: {data}</div>
    </ModalWrapper>
  )
}

export default TestModal
