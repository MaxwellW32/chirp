import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ClerkProvider>
  );};

export default api.withTRPC(MyApp);
