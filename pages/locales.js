import PageLayout from "../components/PageLayout";
import { LocaleToFlagURL } from "../components/Flags";
import Image from 'next/image';
import Link from 'next/link';
import { getEnglishNameFromLocaleCode } from "../components/Locales";
import nextConfig from "../next.config";

const availableLocales = nextConfig.i18n.locales;

export default function Home() {
  const localeButtons = [];

  availableLocales.forEach((code) => {
    localeButtons.push(
      <Link key={code} href={"/" + code}>
            <a className="mt-6 mb-6 text-left">
              <Image
                src={LocaleToFlagURL(code)}
                alt={"Flag of " + getEnglishNameFromLocaleCode(code)} // Handle the "the" prefix
                width={40}
                height={30}
              />
            </a>
          </Link>
    )
  })

  return (
    <PageLayout locales title="Select your language">
      <div className="dark:bg-black dark:text-neutral-100 flex min-h-screen flex-col items-center justify-center py-2">

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Select your language</h1>

        {/* Beginning of the list */}
        <div className="mt-6 flex max-w-4xl bg-gray-50 dark:bg-neutral-900 border rounded-xl flex-wrap items-center justify-around sm:w-full">
          {localeButtons}
        </div>
        {/* Ending of the list */}
        <a href="https://github.com/fOSSBilling/website#localization" target="_blank" rel="noopener" className="mt-3 text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Help us with the translations</a>

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
    </PageLayout>
  )
}