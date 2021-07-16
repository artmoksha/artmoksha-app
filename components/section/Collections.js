import React from 'react'
import Link from '@/components/Link'
import Image from 'next/image'

/**
 *  Collections
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Collections = (props) => {
  const collections = props.collections
  return (
    <>
      <section className="section-collections bg-white dark:bg-gray-900 py-12 px-8">
        <div className="container xl:max-w-7xl mx-auto">
          <section className="flex flex-col md:flex-row justify-between my-4">
            <div className="justify-center md:text-left">
              <h1 className="text-3xl font-prompt text-gray-800 dark:text-gray-100 font-bold leading-none">
                Thangka Collections
              </h1>
              <p className="text-gray-600 mt-3 mb-6 dark:text-gray-100 hidden md:inline-flex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis
                ad perferendis
              </p>
            </div>
            <Link
              href="/collections"
              className="text-blue transition duration-300 my-4 flex justify-left items-center hover:underline hover:text-blue-800 px-0"
            >
              View All Collections →
            </Link>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => {
              return (
                <div key={collection.id} className="w-full p-s4">
                  <Link
                    href={'javascript:void(0)'}
                    className={'bg-white dark:bg-gray-800 shadow p-6 rounded-lg block group'}
                  >
                    <Image
                      className="h-40 rounded w-full object-cover object-center mb-6 group-hover:scale-105 transition duration-300"
                      src={(collection.cover)}
                      height={160}
                      width={360}
                      alt={collection.name}
                    />
                    <div className="flex justify-between">
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        <span className="text-gray-400"> by </span>
                        <strong>Many Artists</strong>
                      </h3>
                      <span>34 items</span>
                    </div>
                    <h2 className="group-hover:text-blue text-gray-900 font-bold text-lg my-2 dark:text-gray-100 w-full transition duration-500 group-hover:text-blue-600">
                      {collection.name}
                    </h2>
                    <p className="leading-relaxed text-base text-gray-700 dark:text-gray-400">
                      {collection.content.length > 10
                        ? collection.content.substring(0, 80) + ' ...'
                        : collection.content}
                    </p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Collections
