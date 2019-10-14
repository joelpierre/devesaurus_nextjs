import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import ConfigProvider from "../src/services/configProvider";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const title = ConfigProvider.getValue("APP_TITLE");
    const description = ConfigProvider.getValue("SITE_DESCRIPTION");
    const appLang = ConfigProvider.getValue("APP_LANG");
    const protocol = ConfigProvider.getValue("PROTOCOL");
    const apiUrl = ConfigProvider.getValue("API_URL");

    return (
      <Html lang={appLang}>
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
          <meta name="robots" content="noindex,nofollow"/>
          <meta name="description" content={description}/>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
          <link rel="icon" type="image/x-icon" href={`${protocol}://${apiUrl}/wp-content/uploads/2019/10/favicon.jpg`}/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-title" content={title}/>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Head>
        <body id="app-root">

        <Main/>

        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
