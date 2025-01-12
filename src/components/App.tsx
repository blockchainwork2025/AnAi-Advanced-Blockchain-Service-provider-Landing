import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppStateConsumer, AppStateProvider } from '../context';
import s from './App.module.css';

import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';

function Main() {
  return (
    <AppStateProvider>
      <main className={s.root}>
    

        <MainContent />
        <Footer />
      </main>
    </AppStateProvider>
  );
}

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    if (window.location.pathname.startsWith('/discord')) {
      window.location.replace('#');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {['/', '/discord'].map(path => (
            <Route path={path} element={<Main />} key={path} />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
