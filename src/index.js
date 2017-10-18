import ReduxResolver from './Resolver/ReduxResolver'
import Resolver from './Resolver/Provider'
import page from './server/page'
import Link from './Link'
import NavLink from './NavLink'
import {
    isAuthenticated,
    logout,
    setToken,
    getToken,
    setRefreshToken,
    getRefreshToken,
    setTokenName,
    setRefreshTokenName,
    setTokenPrefix,
    getTokenPrefix,
    setBaseUrl,
    getBaseUrl,
} from './utils/settings'

import {
    getCookiesData,
    stringifyQuery,
    parseQuery,
    fetcher
} from './utils/fetcher'


import {fetchToState} from './redux'


export {
    ReduxResolver,
    Resolver,
    fetchToState,
    page,
    Link,
    NavLink,
    isAuthenticated,
    logout,
    setToken,
    getToken,
    setRefreshToken,
    getRefreshToken,
    setTokenName,
    setRefreshTokenName,
    setTokenPrefix,
    getTokenPrefix,
    setBaseUrl,
    getBaseUrl,
    getCookiesData,
    stringifyQuery,
    parseQuery,
    fetcher
}
