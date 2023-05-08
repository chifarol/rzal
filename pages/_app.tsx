import "../styles/globals.css";
// import "../styles/bootstrap.css";
import "../styles/fonts.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
