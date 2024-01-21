import "../styles/main.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { raleway } from "../styles/fonts";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Provider from "./context/Provider";

export const metadata = {
  title: "Kisakye Moses | Mosespace",
  description: "Full-Stack Software Developer Located in Kampala Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='light' suppressHydrationWarning={true}>
      <body className={`${raleway.className}`}>
        <Provider>
          <ToastContainer position='top-center' />
          <Navbar />
          <Alert />
          {children}
        </Provider>
      </body>
    </html>
  );
}
