import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';
import React from 'react';
import extraScopePlugin from 'stylis-plugin-extra-scope';

const myCache = createCache({
    stylisPlugins: [
        /* your plugins here */
        extraScopePlugin('#extra-scope')
    ]
});

const StyleCacheProvider = (props) => (
    <CacheProvider value={myCache} {...props} />
);

export default StyleCacheProvider;
