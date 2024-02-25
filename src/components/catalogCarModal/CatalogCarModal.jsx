import React from 'react';
import Modal from 'react-modal';
import {
  AccessoriesWrapper,
  ConditionsWrapper,
  MainInfoWrapperModal,
  ModalContentWrapper,
  RentalButton,
  RentalConditionsItemModal,
  RentalConditionsModal,
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
    mileage,
    rentalPrice,
  } = car;

  const formattedMileage = mileage => {
    const mileageString = mileage.toString();
    const mileageArray = mileageString.split('');
    mileageArray.splice(1, 0, ',');
    return mileageArray.join('');
  };

  const handleCall = phoneNumber => {
    window.location.href = `tel:${phoneNumber}`;
  };

  Modal.setAppElement('#root');
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
            {accessories.map((item, index) => {
              return (
                <StyledInfoListItemModal key={index}>
                  {item}
                </StyledInfoListItemModal>
              );
            })}
          </StyledInfoListModal>
          <StyledInfoListModal>
            {functionalities.map((item, index) => {
              return (
                <StyledInfoListItemModal key={index}>
                  {item}
                </StyledInfoListItemModal>
              );
            })}
          </StyledInfoListModal>
        </AccessoriesWrapper>
        <ConditionsWrapper>
          <StyledModelDescriptionModal>
            Rental Conditions:{' '}
          </StyledModelDescriptionModal>
          <RentalConditionsModal>
            {rentalConditions.split('\n').map((item, index) => {
              if (index === 0) {
                const lastSymbols = item.slice(-2);
                return (
                  <RentalConditionsItemModal key={index}>
                    {item.slice(0, -2)}
                    <span style={{ color: '#3470ff' }}>{lastSymbols}</span>
                  </RentalConditionsItemModal>
                );
              }
              return (
                <RentalConditionsItemModal key={index}>
                  {item}
                </RentalConditionsItemModal>
              );
            })}
            <RentalConditionsItemModal>
              Mileage:{' '}
              <span style={{ color: '#3470ff' }}>
                {formattedMileage(mileage)}
              </span>
            </RentalConditionsItemModal>
            <RentalConditionsItemModal>
              Price: <span style={{ color: '#3470ff' }}>{rentalPrice}</span>
            </RentalConditionsItemModal>
          </RentalConditionsModal>
        </ConditionsWrapper>
        <RentalButton onClick={() => handleCall('+380730000000')}>
          Rental Car
        </RentalButton>
      </ModalContentWrapper>
    </Modal>
  );
};
