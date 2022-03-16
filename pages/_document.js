import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      

        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@900&display=swap" rel="stylesheet" /> 
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}