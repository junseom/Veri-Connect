import Layout from "@/app/layout";
import { AppProps } from "next/app";
import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <DynamicContextProvider
        settings={{
          environmentId: "90ab8cd9-cc6e-4f77-9497-40de9dea002c",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <Component {...pageProps} />
      </DynamicContextProvider>
    </Layout>
  );
};

export default MyApp;
