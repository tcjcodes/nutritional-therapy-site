
// Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//     console.log("new pathname", location.pathname)
//     console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

// Wraps every page in a component
import React from 'react';
import StyleCacheProvider from './src/components/StyleCache/StyleCacheProvider';

export const wrapPageElement = ({ element, props }) => (
    <StyleCacheProvider {...props}>{element}</StyleCacheProvider>
);
