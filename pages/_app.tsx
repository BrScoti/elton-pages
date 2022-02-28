import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyles';
import { useRouter } from 'next/router';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  /* const CDN_NUNITO_FONT_HREF = "https://cdn-portal.centraldofranqueado.com.br/cms/2022/02/17/XRXV3I6Li01BKofINeaB.woff2";
  const CDN_NUNITO_SEMI_BOLD_HREF = "https://cdn-portal.centraldofranqueado.com.br/cms/2022/02/17/XRXW3I6Li01BKofA6sKUYevI.woff2";
  const CDN_NUNITO_BOLD_HREF = "https://cdn-portal.centraldofranqueado.com.br/cms/2022/02/17/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2";
  const CDN_NUNITO_EXTRA_BOLD_HREF = "https://cdn-portal.centraldofranqueado.com.br/cms/2022/02/17/XRXW3I6Li01BKofAksCUYevIWzgPDA.woff2";  */

  const CDN_NUNITO_FONT_HREF = "https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofINeaB.woff2";
  const CDN_NUNITO_SEMI_BOLD_HREF = "https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofA6sKUYevI.woff2";
  const CDN_NUNITO_BOLD_HREF = "https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2";
  const CDN_NUNITO_EXTRA_BOLD_HREF = "https://fonts.gstatic.com/s/nunito/v16/XRXW3I6Li01BKofAksCUYevIWzgPDA.woff2";

  return (
    <>
      <Head>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content={"user-scalable=0, initial-scale=1," + "minimum-scale=1, width=device-width, height=device-height"} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=optional"
          rel="stylesheet"
        />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" /> */}
        {/* <link rel="shortcut icon" href="https://cdn-portal.centraldofranqueado.com.br/cms/2021/03/26/605dd81f4b704favicon.png" /> */}
        {/* <link rel="preload" href={CDN_NUNITO_FONT_HREF} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={CDN_NUNITO_SEMI_BOLD_HREF} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={CDN_NUNITO_BOLD_HREF} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={CDN_NUNITO_EXTRA_BOLD_HREF} as="font" type="font/woff2" crossOrigin="anonymous" /> */}


        {/* <style>
          {`@font-face{font-family:Nunito;font-style:normal;font-weight:400;font-display:swap;src:url(${CDN_NUNITO_FONT_HREF}); format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`}
          {`@font-face{font-family:Nunito;font-style:normal;font-weight:600;font-display:swap;src:url(${CDN_NUNITO_SEMI_BOLD_HREF}); format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`}
          {`@font-face{font-family:Nunito;font-style:normal;font-weight:700;font-display:swap;src:url(${CDN_NUNITO_BOLD_HREF}); format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`}
          {`@font-face{font-family:Nunito;font-style:normal;font-weight:800;font-display:swap;src:url(${CDN_NUNITO_EXTRA_BOLD_HREF}); format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`}
          {`html{font-family:'Nunito', sans-serif; }`}
        </style> */}

        {/* Google Tag Manager*/}
        {/* <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5WW8BHJ');
                    `}}
        /> */}
        {/* End Google Tag Manager */}
      </Head>
      <ThemeProvider theme={theme}>

        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
