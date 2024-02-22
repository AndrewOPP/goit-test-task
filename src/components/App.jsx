import { AboutPage } from 'pages/AboutPage';
import { CatalogPage } from 'pages/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header>Здесь может быть ваш заголовок</Header>
      <main>{children}</main>
      <footer>Здесь может быть ваш футер</footer>
    </div>
  );
};

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};
