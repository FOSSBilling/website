import Layout from "../components/layout";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout home>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-blue-600">
            FOSSBilling
          </span>!
        </h1>
        
        <div className="mt-6">
        <a href="https://fossbilling.org/downloads/preview" target="_blank" rel="noopener">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download the latest preview</span>
          </button>
        </a>
        <p className="mt-3 text-gray-600">
          <a className="hover:text-gray-700" href="https://github.com/FOSSBilling/FOSSBilling" target="_blank" rel="noopener">source code</a> |{" "}
          <a className="hover:text-gray-700" href="https://docs.fossbilling.org" target="_blank" rel="noopener">documentation</a> |{" "}
          <a className="hover:text-gray-700" href="https://fossbilling.org/discord" target="_blank" rel="noopener">discord</a> |{" "}
          <a className="hover:text-gray-700" href="https://fossbilling.org/donate" target="_blank" rel="noopener">donate</a>
        </p>
        </div>

        {/*<div className="text-center py-4 lg:px-4">
          <a href="https://fossbilling.org/discord" target="_blank" rel="noopener">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
              <span className="font-semibold mr-2 text-left flex-auto px-2">Everybody is now welcome to join our Discord community!</span>
              <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
          </a>
        </div>*/}

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://docs.fossbilling.org/faq"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-900 focus:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            <h3 className="text-2xl font-bold">FAQ &rarr;</h3>
            <p className="mt-4 text-xl">
              What happened to BoxBilling?
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=fossbilling&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/powered-by-vercel.svg" alt="Powered by Vercel" width={175} height={37}></Image>
        </a>
      </footer>
    </div>
    </Layout>
  )
}
