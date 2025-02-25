import SmoothScroll from "@components/SmoothScroll";
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import GoToTopButton from "@components/GoToTop";
import ContactUsModal from "@components/ContactUsModal";

export const metadata = {
  title: "Jasper Azerbaijan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>
        <SmoothScroll>
          <Navbar />
          <GoToTopButton />
          {children}
          <Footer />
          <ContactUsModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
