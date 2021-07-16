import React from 'react'
import Image from 'next/image'

/**
 *  Process
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Process = (props) => {
  const steps = props.steps
  return (
    <>
      <section className="section-process bg-white dark:bg-gray-900 pt-12 pb-24 px-8">
        <div className="container xl:max-w-7xl mx-auto">
          <section className="flex justify-center py-4 md:py-8">
            <div className="text-center">
              <h1 className="text-3xl font-prompt text-gray-800 dark:text-gray-100 font-bold leading-none mb-3">
                How It Works For Artists?
              </h1>
              <p className="text-gray-600 mt-3 mb-6 dark:text-gray-100 hidden md:inline-flex font-bold text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis
                ad perferendis
              </p>
            </div>
          </section>
          <section className="grid md:grid-cols-4 gap-12">
            {!steps.length && '.'}
            {steps.map((step) => {
              return (
                <div key={step.id} className="w-full rounded p-4 group">
                  <div className="flex justify-center">
                    <Image
                      height={75}
                      width={250}
                      src={(step.icon)}
                      className="w-full object-contain h-16 rounded  transform transition duration-300 group-hover:scale-110"
                      alt={step.title}
                    />
                  </div>
                  <div className="flex my-6 text-center">
                    <h2 className="text-gray-900 font-bold text-lg dark:text-gray-100 w-full transition duration-500 group-hover:text-blue-600">
                      {step.id}. {step.title}
                    </h2>
                  </div>
                  <div className="flex text-center">
                    <p className="text-gray-700 dark:text-gray-400">{step.description}</p>
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

export default Process
