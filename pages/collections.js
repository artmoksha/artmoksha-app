import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'
import artworks from '@/data/artworks'
import React from 'react'
import collections from '@/data/collections'

export default function Collections() {
  return (
    <>
      <section className="section-collections page bg-white dark:bg-gray-900">
        <div className="px-4 py-24 mb-20 text-left bg-gray-50 dark:bg-gray-800 md:text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-gray-100">
            Collections
          </h1>
          <p className="text-base text-gray-500 md:text-lg">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis
            nihil quod,
          </p>
        </div>

        <section className="w-full px-4 pt-12 py-24 mx-auto max-w-7xl md:w-4/5">
          <div className="flex flex-row">
            <div className="w-full">
              <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {collections.map((collection) => {
                  return (
                    <div key={collection.id} className="w-full p-4">
                      <a
                        className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg block group"
                        href="javascript:void(0)"
                      >
                        <Image
                          src={(collection.cover)}
                          alt={collection.name}
                          className="h-40 rounded w-full object-cover object-center mb-6 group-hover:scale-105 transition duration-300"
                        />
                        <h2 className="text-center group-hover:text-blue text-gray-900 font-bold text-lg my-2 dark:text-gray-100 w-full transition duration-500 group-hover:text-blue-600">
                          {collection.name}
                        </h2>
                      </a>
                    </div>
                  )
                })}
              </section>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
