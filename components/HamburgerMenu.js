"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        onClick={handleMenuToggle}
        className="sm:hidden flex items-center px-3 py-2 rounded text-neutral-600 border-neutral-600 hover:text-neutral-900 hover:border-neutral-900"
      >
        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          {isOpen ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4.293 4.293 4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414l4.293-4.293L4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <nav className="sm:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
          <button
            onClick={handleMenuToggle}
            className="absolute top-3 right-3 text-neutral-600 hover:text-neutral-900"
          >
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4.293 4.293 4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414l4.293-4.293L4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul className="text-neutral-600 flex flex-col justify-center items-center h-full space-y-6">
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
            <li>
              <Link href="/services">Dienste</Link>
            </li>
            <li>
              <Link
                href="/book-appointment"
                className="bg-indigo-600 text-white px-3 py-2 rounded-lg"
              >
                Termin vereinbaren
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
