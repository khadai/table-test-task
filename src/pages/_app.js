import {defaultTheme, Provider, SSRProvider} from '@adobe/react-spectrum';
import "node_modules/@spectrum-css/vars/dist/spectrum-global.css";
import "node_modules/@spectrum-css/vars/dist/spectrum-medium.css";
import "node_modules/@spectrum-css/vars/dist/spectrum-large.css";
import "node_modules/@spectrum-css/vars/dist/spectrum-light.css";
import "node_modules/@spectrum-css/vars/dist/spectrum-dark.css";
import "node_modules/@spectrum-css/vars/dist/spectrum-darkest.css";
import "node_modules/@spectrum-css/page/dist/index-vars.css";
import "node_modules/@spectrum-css/button/dist/index-vars.css";
import "node_modules/@spectrum-css/pagination/dist/index-vars.css";
import "node_modules/@spectrum-css/typography/dist/index-vars.css";
import "node_modules/@spectrum-css/icon/dist/index-vars.css";
import "node_modules/@spectrum-css/actionbutton/dist/index-vars.css";
import "node_modules/@spectrum-css/textfield/dist/index-vars.css";
import "node_modules/@spectrum-css/tokens/dist/index.css";

export default function App({Component, pageProps}) {
    return (
        <SSRProvider>
            <Provider theme={defaultTheme}>
                <Component {...pageProps} />
            </Provider>
        </SSRProvider>
    )
}
