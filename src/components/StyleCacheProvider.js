import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';
import React from 'react';
import extraScopePlugin from 'stylis-plugin-extra-scope';

const myCache = createCache({
    // Uncommenting key breaks the css- styles:
    key: 'cachekey',
    stylisPlugins: [
        /* your plugins here */
        extraScopePlugin('#extra-scope')
    ]
});

const StyleCacheProvider = (props) => (
    <CacheProvider value={myCache} {...props} />
);

export default StyleCacheProvider;
