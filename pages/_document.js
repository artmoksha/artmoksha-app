import Document, {Html, Head, Main, NextScript} from 'next/document'
import nextConfig from '../moksha-app.config'

const generateFontLinks = (fontsFolder, fileName) => {
    return (
        <>
            <link
                rel="preload"
                href={`/fonts/${fontsFolder}/${fileName}.eot`}
                as="font"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href={`/fonts/${fontsFolder}/${fileName}.woff2`}
                as="font"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href={`/fonts/${fontsFolder}/${fileName}.woff`}
                as="font"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href={`/fonts/${fontsFolder}/${fileName}.ttf`}
                as="font"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href={`/fonts/${fontsFolder}/${fileName}.svg#Montserrat`}
                as="font"
                crossOrigin="true"
            />
        </>
    )
}

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
                        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
                        crossOrigin="anonymous"
                    />

                    {nextConfig.openGraph.verification.map((v) => (
                        <meta key={v.name} name={v.name} content={v.token}/>
                    ))}
                    {nextConfig.openGraph.twitter && nextConfig.openGraph.twitter.site && (
                        <>
                            <meta name="twitter:card" content="summary_large_image"/>
                            <meta name="twitter:site" content={nextConfig.openGraph.twitter.site}/>
                            <meta name="twitter:creator" content={nextConfig.openGraph.twitter.creator}/>
                            <meta name="twitter:image" content={nextConfig.openGraph.twitter.image}/>
                        </>
                    )}

                    {nextConfig.openGraph.og && nextConfig.openGraph.og.site && (
                        <>
                            <meta property="og:site_name" content={nextConfig.openGraph.og.site}/>
                            <meta property="og:image" content={nextConfig.openGraph.og.image}/>
                            <meta property="og:type" content={nextConfig.openGraph.og.type}/>
                        </>
                    )}
                    {nextConfig.openGraph.author && (
                        <meta property="article:author" content={nextConfig.openGraph.author}/>
                    )}

                    <link rel="manifest" href="manifest.json"/>

                    {(nextConfig.i18n || {})?.domains?.map((domain) => (
                        <link key={domain.domain} rel="alternate" hrefLang={domain.defaultLocale} href={domain.domain}/>
                    ))}
                </Head>
                <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
