import React from 'react';
import ReactDom from 'react-dom';

// Mount function to start up the application.
const mount = (el) => {
    ReactDom.render(
        <h1>Hi there!</h1>,
        el
    );
};

// If we are in development and in isolation,
// call mount immediately.
if(process.env.NODE_ENV !== 'production'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot){
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function.

export { mount }