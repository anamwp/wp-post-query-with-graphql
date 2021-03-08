import React from 'react';
import { render } from "react-dom";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
// import ReactDOM from 'react-dom';
import './index.css';
import PostsSearch from './PostSearch';

const client = new ApolloClient({
  // Change this to the URL of your WordPress site.
  uri: "https://anam.rocks/graphql"
});
// console.log('client', client);

const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <h2 className="title">
        Search for latest post  {' '}
        <span className="emoji" role="img" aria-label="rocket">🚀</span>
      </h2>
      <PostsSearch />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
