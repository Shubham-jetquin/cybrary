import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/header/page";
import Footer from "./_component/footer/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='/assets/stylesheet/style.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/9.6ac3976b.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/17.22abfce0.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/28.b5e8f5e1.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/26.c695453b.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/17.22abfce0.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/40.eeb001f3.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/4.07aa08a5.chunk.css' media='all' />
        <link rel='stylesheet' href='/assets/stylesheet/1.d2d44206.chunk.css' media='all' />

      </head>
      <body
        className=""
      >
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
