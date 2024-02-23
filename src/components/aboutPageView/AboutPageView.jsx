import React from 'react';
import {
  AboutWrapper,
  ListItem,
  ListItemText,
  ListItemTitle,
  ListWrapper,
  MainText,
  MainTitle,
} from './AboutPageView.styled';

export const AboutPageView = () => {
  return (
    <AboutWrapper>
      <MainTitle>About the UKRCAR</MainTitle>
      <div>
        <MainText>
          Ми - ваш надійний партнер у подорожах, що допоможе вам зробити вашу
          подорож ще більш комфортною та захопливою. Наша компанія
          спеціалізується на наданні широкого спектру автомобілів у прокат для
          різноманітних потреб.
        </MainText>
      </div>
      <ListWrapper>
        <ListItem>
          <ListItemTitle>Bибір автомобілів</ListItemTitle>
          <ListItemText>
            Від невеликих економічних моделей до комфортних сімейних авто та
            преміум-класу.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemTitle>Гнучкі умови прокату</ListItemTitle>
          <ListItemText>
            Ми пропонуємо різні тарифи та плани прокату, що відповідають вашим
            потребам та бюджету.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemTitle>Зручний онлайн-бронювання</ListItemTitle>
          <ListItemText>
            Наша онлайн-платформа дозволяє зручно та швидко забронювати
            автомобіль з будь-якої точки світу.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemTitle>Професійне обслуговування</ListItemTitle>
          <ListItemText>
            Наші спеціалісти завжди готові допомогти вам з будь-якими питаннями
            та запитами, щоб ваша подорож пройшла гладко та без проблем.
          </ListItemText>
        </ListItem>
      </ListWrapper>
    </AboutWrapper>
  );
};
