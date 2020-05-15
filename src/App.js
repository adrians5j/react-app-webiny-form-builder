import React from "react";
import { Form } from "@webiny/app-form-builder/components/Form";
import formBuilderTheme from "@webiny/app-form-builder-theme";
import "@webiny/app-form-builder-theme/styles.scss";

import { registerPlugins } from "@webiny/plugins";

import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "apollo-boost";

const WEBINY_API_URL = "https://d2yb6c8c0wrwtd.cloudfront.net/graphql";
const UNIQUE_FORM_SLUG = "test-form-8k8t178q3";

registerPlugins(formBuilderTheme());

const client = new ApolloClient({
    // Point the Apollo Client to your API.
    uri: WEBINY_API_URL
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div style={{ width: 500, margin: "0 auto" }}>
                <h1>Forms in a simple React app</h1>
                <Form slug={UNIQUE_FORM_SLUG} />
            </div>
        </ApolloProvider>
    );
}

export default App;
