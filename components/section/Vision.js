import React from 'react'
import Image from 'next/image'

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Vision = (props) => {
  const vision = props.vision

  return (
    <>
      <section className="section-vision bg-white dark:bg-gray-900 pt-12 pb-24 px-8">
        <div className="container xl:max-w-5xl mx-auto">
          <section className="flex justify-center pt-4 md:py-8">
            <div className="text-center">
              <h1 className="text-3xl font-prompt text-gray-800 dark:text-gray-100 font-bold leading-none mb-3">
                Why ArtMoksha
              </h1>
              <p className="text-gray-600 dark:text-gray-100 hidden md:inline-flex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis
                ad perferendis
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-16 mt-8">
            {!vision.length && 'No posts found.'}
            {vision.map((step) => {
              return (
                <div
                  key={step.id}
                  className="w-full rounded py-6 hover:shadows transition duration-500 rounded bg-white dark:bg-gray-800 hover:border-blue-600 border-transparent"
                >
                  <div className="flex flex-col justify-between items-center group transition duration-300 ">
                    <div className="text-center">
                      <Image
                        src={(step.image)}
                        height={60}
                        width={300}
                        className="w-full object-contain h-12 rounded transform transition duration-500 group-hover:scale-125"
                        alt={step.name}
                      />
                    </div>
                    <div className="text-center my-4">
                      <h3 className="text-gray-900 w-full text-xl font-bold group-hover:text-blue-800 transition duration-500 dark:text-gray-100">
                        {step.name}
                      </h3>
                    </div>
                    <div className="text-center opacity-100 h-auto transition duration-500 group-hover:opacity-100 group-hover:h-auto">
                      <p className="text-gray-700 dark:text-gray-400">{step.description}</p>
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

export default Vision
