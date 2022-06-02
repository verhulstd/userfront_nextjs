import "../styles/globals.css";
import Userfront from "@userfront/react";
Userfront.init(process.env.NEXT_PUBLIC_USERFRONTID);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
