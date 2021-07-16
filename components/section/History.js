import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/**
 *  History Components
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const History = (props) => {
  const ArrowLeft = (props) => <button {...props} className={'prev'} />
  const ArrowRight = (props) => <button {...props} className={'next'} />
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const history = props.history
  return (
    <>
      <section className="section-prsocess bg-white dark:bg-gray-900 pt-12 pb-24 px-8">
        <div className="container xl:max-w-7xl mx-auto">
          <section className="flex justify-center py-4 md:py-8">
            <div className="text-center">
              <h1 className="text-3xl font-prompt text-gray-800 dark:text-gray-100 font-bold leading-none mb-3">
                History of Thangka Art
              </h1>
              <p className="text-gray-600 mt-3 mb-6 dark:text-gray-100 hidden md:inline-flex font-bold text-md">
                Know more about Pauba, Thangka Art Community and History
              </p>
            </div>
          </section>
          <section className="w-2/3 mx-auto">
            <Slider {...settings}>
              {history.map((history) => {
                return (
                  <div key={history.id} className="w-full bg-white rounded relative">
                    <a
                      href="javascript:void(0)"
                      className="flex max-w-sm p-16 rounded gap-3 items-center mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-coolGray-50"
                      style={{
                        backgroundImage: 'url(' + `${history.cover}` + ')',
                        width: '100%',
                        height: 'h-full',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="p-6 rounded shadow space-y-2 lg:col-span-7 items-center bg-white">
                        <h3 className="text-gray-900 w-full text-xl font-bold group-hover:text-blue-800 transition duration-500 dark:text-gray-100">
                          {history.title}
                        </h3>
                        <span className="text-xs text-coolGray-600"> February 19, 2021 </span>
                        <p className="text-gray-700 dark:text-gray-400">
                          {history.description.length > 10
                            ? history.description.substring(0, 90) + ' ..'
                            : history.description}
                        </p>
                      </div>
                    </a>
                  </div>
                )
              })}
            </Slider>
          </section>
        </div>
      </section>
    </>
  )
}
export default History
