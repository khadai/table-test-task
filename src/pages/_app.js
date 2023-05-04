import {defaultTheme, Provider, SSRProvider} from '@adobe/react-spectrum';

export default function App({Component, pageProps}) {
    return (
        <SSRProvider>
            <Provider theme={defaultTheme}>
                <Component {...pageProps} />
            </Provider>
        </SSRProvider>
    )
}
