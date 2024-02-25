import { AboutPage } from 'pages/AboutPage';
import { CatalogPage } from 'pages/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
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
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Layout>
  );
};
