import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/*Svæði til að setja inn custom fonts eða einhverjar external skriptur <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&amp;display=swap" rel="stylesheet" />*/}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;