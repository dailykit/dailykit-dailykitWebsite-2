import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script defer src="/loader.js" />
          <script defer src="/mailer.js" />
          <script defer src="/analytics.js" />
          <script defer src="/googleTagManager.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
