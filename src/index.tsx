import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './Redux/store';
import { ProductContext } from '../src/context';

let client = new ApolloClient({
    uri: ' http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

function Main() {
    /*let payloadData = useSelector((state: RootState) => {
        return state.allProd.products;
    });*/
    console.log('state', store);
    console.log('store getstate', store.getState());
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <ApolloProvider client={client}>
                        <App />
                    </ApolloProvider>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
