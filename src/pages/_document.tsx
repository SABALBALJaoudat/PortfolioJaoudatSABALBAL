import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    const mouseflowScript = `
      window._mfq = window._mfq || [];
      (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.defer = true;
        mf.src = "//cdn.mouseflow.com/projects/7f88e616-22dd-4beb-9643-495e7fae9246.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
      })();
    `;

  return (
    <Html lang="en">
        <Head>
            <script
                dangerouslySetInnerHTML={{ __html: mouseflowScript }}
            />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
