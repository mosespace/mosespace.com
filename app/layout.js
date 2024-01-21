import "../styles/main.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { raleway } from "../styles/fonts";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Provider from "./context/Provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Kisakye Moses | Mosespace",
  description: "Full-Stack Software Developer Located in Kampala Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning={true}>
      <body className={`${raleway.className}`}>
        <Provider>
          <ToastContainer position='top-center' />
          {/* <Alert /> */}
          <div className='dark:bg-[#030712] bg-white w-full overflow-hidden'>
            <div className='container max-w-4xl m-auto space-y-8 px-6 py-12 text-zinc-950 dark:text-white md:px-12 lg:px-20'>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
