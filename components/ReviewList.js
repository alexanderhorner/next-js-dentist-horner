"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import deDict from '@/lang/de.json'
import enDict from '@/lang/en.json'


export default function ReviewList() {
  const dictionaries = {
    de: deDict,
    en: enDict,
  }
  const dict = dictionaries[useRouter().locale]
  const reviews = dict.reviews

  const [displayedReviews, setDisplayedReviews] = useState({
    count: 3, 
    fullText: false
  });

  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setDisplayedReviews({ count: 4, fullText: false })
    }
  }, [])

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.slice(0, displayedReviews.count).map((review, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <p className="text-neutral-600 mb-2">"{displayedReviews.fullText ? review.text : review.textShort}"</p>
            <div className="text-base font-semibold">{review.author}</div>
            <div className="text-xs text-neutral-500">{review.source}</div>
          </li>
        ))}
      </ul>
      {displayedReviews.count < reviews.length && (
        <button
          onClick={() => setDisplayedReviews({ count: reviews.length, fullText: true })}
          className="border border-indigo-500 text-indigo-600 px-4 py-2 rounded-lg mt-4 hover:bg-indigo-600 hover:text-white transition-colors"
        >
          { dict.page.reviewList.more }
        </button>
      )}
    </div>
  )
}