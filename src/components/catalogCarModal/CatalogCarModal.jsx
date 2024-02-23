import {
  StyledInfoList,
  StyledInfoListItem,
  StyledModelSpan,
  StyledModelText,
} from 'components/catalogPageView/CatalogPageView.styled';
import React from 'react';
import Modal from 'react-modal';
import {
  AccessoriesWrapper,
  ConditionsWrapper,
  MainInfoWrapperModal,
  ModalContentWrapper,
  RentalButton,
  StyledImg,
  StyledInfoListItemModal,
  StyledInfoListModal,
  StyledModelDescriptionModal,
  StyledModelSpanModal,
  StyledModelTextModal,
  UilMultiplyStyled,
} from './CatalogCarModal.styled';
const customStyles = {
  content: {
    backgroundColor: `white `,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    width: 541,
    borderRadius: 24,
    position: 'relative',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#12141780',
  },
};

export const CatalogCarModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  car,
}) => {
  const {
    img,
    make,
    model,
    year,
    type,
    id,
    carAddressCity,
    carAddressCountry,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = car;

  Modal.setAppElement('#root');
  console.log(12321);
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <UilMultiplyStyled onClick={closeModal} />
      <ModalContentWrapper>
        <StyledImg src={img} alt="car" />
        <MainInfoWrapperModal>
          <StyledModelTextModal>
            {make} <StyledModelSpanModal>{model}</StyledModelSpanModal>, {year}
          </StyledModelTextModal>
          <StyledInfoListModal>
            <StyledInfoListItemModal>{carAddressCity}</StyledInfoListItemModal>
            <StyledInfoListItemModal>
              {carAddressCountry}
            </StyledInfoListItemModal>
            <StyledInfoListItemModal>Id: {id}</StyledInfoListItemModal>
            <StyledInfoListItemModal>Year: {year}</StyledInfoListItemModal>
            <StyledInfoListItemModal>Type: {type}</StyledInfoListItemModal>
          </StyledInfoListModal>
          <StyledInfoListModal>
            <StyledInfoListItemModal>
              Fuel Consumption: {fuelConsumption}
            </StyledInfoListItemModal>
            <StyledInfoListItemModal>
              Engine Size: {engineSize}
            </StyledInfoListItemModal>
          </StyledInfoListModal>

          <StyledModelDescriptionModal>
            {description}
          </StyledModelDescriptionModal>
        </MainInfoWrapperModal>

        <AccessoriesWrapper>
          <StyledModelDescriptionModal>
            Accessories and functionalities:
          </StyledModelDescriptionModal>
          <StyledInfoListModal>
            {accessories.map(item => {
              return <StyledInfoListItemModal>{item}</StyledInfoListItemModal>;
            })}
          </StyledInfoListModal>
          <StyledInfoListModal>
            {functionalities.map(item => {
              return <StyledInfoListItemModal>{item}</StyledInfoListItemModal>;
            })}
          </StyledInfoListModal>
        </AccessoriesWrapper>
        <ConditionsWrapper>
          <StyledModelDescriptionModal>
            Rental Conditions:{' '}
          </StyledModelDescriptionModal>
          <ul>
            {rentalConditions.split('\n').map(item => {
              return <li>{item}</li>;
            })}
          </ul>
        </ConditionsWrapper>
        <RentalButton type="button">Rental Car</RentalButton>
      </ModalContentWrapper>
    </Modal>
  );
};
