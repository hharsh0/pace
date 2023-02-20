import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-300 text-black antialiased dark:bg-background-color dark:text-white duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
