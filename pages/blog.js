import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

import posts from '@/data/posts'
import Link from '@/components/Link'
import React from 'react'
import Image from 'next/image'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

/**
 * Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <div className="px-4 py-24 mb-20 text-left bg-gray-50 dark:bg-gray-800 md:text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-gray-100">
          Our Blog
        </h1>
        <p className="text-base text-gray-500 md:text-lg">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil
          quod,
        </p>
      </div>
      <section className="w-full px-4 pb-24 mx-auto max-w-7xl md:w-4/5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => {
            return (
              <div
                className="w-full shadow dark:border-transparent border rounded items-center dark:bg-gray-800"
                key={post.id}
              >
                <Link className={'relative hover:text-blue'} href={'collections'}>
                  <Image
                    src={(post.image)}
                    alt={post.title}
                    height={300}
                    width={390}
                    className="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 h-96 group-hover:scale-105"
                  />
                </Link>
                <div className="w-full p-4 items-center">
                  <p className="mb-3 flex justify-between text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    <strong>Development</strong>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate
                      )}
                    </time>
                  </p>
                  <h2 className="mb-2 text-xl dark:text-gray-100 font-bold leading-snug text-gray-900">
                    <Link
                      className={'relative hover:text-blue text-gray-900 dark:text-gray-100'}
                      href={post.slug}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mb-4 text-sm font-normal text-gray-600">{post.body}</p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href={post.slug}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Read More
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
