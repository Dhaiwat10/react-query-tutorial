import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
