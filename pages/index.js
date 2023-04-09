import Head from 'next/head'
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import deDict from '@/lang/de.json'
import enDict from '@/lang/en.json'
import Link from 'next/link'
import Image from 'next/image'
import Star from '@/public/Five_Pointed_Star_Solid.svg'
import Telephone from '@/public/phone.svg'
import ReviewList from '@/components/ReviewList'
import NavBar from '@/components/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher';


export default function Home() {
  const dictionaries = {
    de: deDict,
    en: enDict,
  }

  const dict = dictionaries[useRouter().locale]
  const homeDict = dict.page.home

  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>{ homeDict.head.title }</title>
        <meta name="description" content={ homeDict.head.meta.description } />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <NavBar />

        <main className="px-5 md:px-8 break-words hyphens-auto mt-16 md:mt-28 lg:mt-36 max-w-screen-xl mx-auto">

          {/* Hero */}
          <div className="block text-indigo-600 border border-indigo-600 mb-3 px-2 py-0.5 text-xs rounded-lg w-fit">{ homeDict.hero.label }</div>
          <h1 className="text-5xl font-bold mb-4 md:text-6xl">{homeDict.hero.title}</h1>
          <div className="text-neutral-600 text-base mb-4"><strong className='text-indigo-600'>{ homeDict.hero.description.strong }</strong>{ homeDict.hero.description.after }</div>
          <Link className="flex items-center h-12 bg-indigo-600 text-white px-3 py-2 w-fit rounded-lg hover:bg-indigo-800 transition-colors" href="tel:499182902020">
            <Image src={Telephone} alt="Telephone" className="h-full w-auto" />
            <span className="ml-4">+49 9182 902020</span>
          </Link>
          
          {/* Sterne */}
          <div className="flex place-content-between w-44 mx-auto mt-20 fill-amber-500 sm:w-72">
            <Image src={Star} alt="Star" className="h-8 sm:h-12 w-auto" />
            <Image src={Star} alt="Star" className="h-8 sm:h-12 w-auto" />
            <Image src={Star} alt="Star" className="h-8 sm:h-12 w-auto" />
            <Image src={Star} alt="Star" className="h-8 sm:h-12 w-auto" />
            <Image src={Star} alt="Star" className="h-8 sm:h-12 w-auto" />
          </div>
          <div className="text-base mx-auto w-fit text-neutral-800 mt-2 sm:text-lg"><b>{ homeDict.stars.number }</b> { homeDict.stars.text }</div>


          {/* Patientenbewertungen */}
          <section className="my-12 md:my-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">{ homeDict.review.header }</h2>
            <ReviewList />
          </section>


          {/* Über uns */}
          <section className="my-12 md:my-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">{ homeDict.aboutus.header }</h2>
            <div className="flex flex-col text-neutral-500 text-base gap-7 break-normal hyphens-none md:text-lg">
              { homeDict.aboutus.paragraphs.map((text, index) => <p key={index}>{text}</p>)}
            </div>
          </section>


          {/* Öffnungszeiten */}
          <section className="my-12 md:my-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">{ homeDict.openinghours.header }</h2>
            <div className="grid grid-cols-[min-content_min-content] gap-4 text-neutral-500 text-base font-normal max-w-fit whitespace-nowrap">
              {
                homeDict.openinghours.days.map((day, index) => (
                  <>
                    <div key={`${index}`} className="font-semibold">{day.name}</div>
                    <div key={`hours-${index}`}>
                      {day.hours[0]}
                      {day.hours[1] && (
                        <>
                          <br />
                          {day.hours[1]}
                        </>
                      )}
                    </div>
                  </>
                ))
              }
            </div>

            <div className="text-neutral-500 mt-4">{ homeDict.openinghours.suggestion }</div>
          </section>
          

          {/* Last action call */}
          <section className="my-12 md:my-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">{ homeDict.lastActionCall.header }</h2>

            <Link
              className="flex items-center justify-center whitespace-nowrap bg-indigo-600 px-5 py-5 text-lg rounded-lg text-white hover:bg-indigo-800 transition-colors"
              href="tel:+499182902020"
            >
              <Image src={Telephone} alt="Telephone" className="h-9 w-auto mr-5" />
              <span>+49 9182 902020</span>
            </Link>
          </section>

        </main>


        {/* Footer */}
        <footer className="bg-neutral-100 px-5 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-md text-neutral-600 mx-auto">
            
            <div>
              <h3 className="font-semibold mb-3">{ homeDict.footer.address }</h3>
              <div>Neumarkter Str. 5 <br/>92355 Velburg <br/>{ dict.germany }</div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">{ homeDict.footer.telephone }</h3>
              <Link className="text-indigo-600" href="tel:+499182902020">+49 9182 902020</Link>
            </div>

            <div>
              <h3 className="font-semibold mb-3">{ homeDict.footer.lang }</h3>
              <LanguageSwitcher />
            </div>


            {/* <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-semibold mb-3">Links</h3>
              <ul>
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link href="/services">Dienste</Link>
                </li>
                <li>
                  <Link href="/book-appointment">Termin vereinbaren</Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="text-center text-xs mt-5 text-neutral-600">
            <p>Copyright &copy; {new Date().getFullYear()} Alexander Horner. Alle Rechte vorbehalten.</p>
          </div>
        </footer>

      </div>

    </div>
  )
}
