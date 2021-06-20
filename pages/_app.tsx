import type { AppProps } from "next/app";
import { ThemeProvider } from "~/theme";
import 'react-perfect-scrollbar/dist/css/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
