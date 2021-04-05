import { useEffect, useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import Routes from "./routes/index";

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_API_URL || "http://192.168.5.185:8000/graphql",
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client, setClient] = useState("");

  useEffect(() => {
    const clientData = createApolloClient();
    setClient(clientData);
  }, []);

  return (
    <>
      {client ? (
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
