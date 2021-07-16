import Link from '@/components/Link'
import React from 'react'
import Image from 'next/image'

/**
 *  Featured artworks
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Featured = (props) => {
  const artworks = props.artworks
  return (
    <>
      <section className="section-artworks bg-white dark:bg-gray-900 py-12 px-8">
        <div className="container xl:max-w-7xl mx-auto">
          <section className="flex flex-col md:flex-row justify-between my-4">
            <div className="justify-center md:text-left">
              <h1 className="text-3xl font-prompt text-gray-800 dark:text-gray-100 font-bold leading-none">
                Featured Artworks
              </h1>
              <p className="text-gray-600 mt-3 mb-6 dark:text-gray-100 hidden md:inline-flex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis
                ad perferendis
              </p>
            </div>
            <Link
              href="/collections"
              className="text-blue my-4 flex justify-left items-center hover:underline hover:text-blue-900 px-0"
            >
              View All Artworks →
            </Link>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {artworks.map((artwork) => {
              return (
                <div key={artwork.id} className="group col-span-1 rounded shadow overflow-hidden">
                  <div className="w-full p-1 dark:bg-gray-800 transition duration-500 hover:scale-11">
                    <Link className={'relative'} href={'collections'}>
                      <Image
                        src={(artwork.image)}
                        className="w-full rounded transition duration-500 h-96 group-hover:scale-105"
                        alt={artwork.title}
                        height={385}
                        width={275}
                      />
                    </Link>
                    <div className="p-2 mt-4 flex justify-between items-center">
                      <Link
                        className={
                          'text-gray-900 text-lg dark:text-gray-100 font-bold group-hover:text-blue-800 '
                        }
                        href={'collections'}
                      >
                        {artwork.name}
                      </Link>
                      <span className="text-gray-600 dark:text-gray-100">{artwork.price}</span>
                    </div>
                    <div className="p-2 mb-3 flex justify-between items-center">
                      <p className="text-gray-900 text-base dark:text-gray-400">
                        <span>
                          by <strong> @creator</strong>
                        </span>
                      </p>
                      <button
                        className="
                                                px-4 py-1 border border-blue transition duration-300 shadow rounded text-blue-600
                                                hover:bg-blue dark:hover:text-blue-400
                                                hover:border-transparent hover:text-white
                                                 "
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        </div>
      </section>
    </>
  )
}

export default Featured
