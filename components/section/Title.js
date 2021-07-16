import React from 'react'

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SectionHeader = (props) => {
  let position = ['center', 'left']
  let { title, button, center, description } = props
  let sectionButton = ''
  let textStyle = { textAlign: 'center' }

  if (button) {
    sectionButton = (
      <a
        className="text-blue-600 justify-center hover:underline hover:text-blue-800 px-0"
        href={button.link}
      >
        {' '}
        {button.title}{' '}
      </a>
    )
    textStyle = ''
  }
  let textClass = center ? 'w-full text-center' : 'w-7/12 '
  return (
    <React.Fragment>
      <section className="flex justify-between py-4 md:py-8">
        <div className={textClass}>
          <h1 className="text-3xl font-prompt text-gray-800 dark:text-gray-100 font-bold leading-none mb-3">
            {title ? title : '  '}
          </h1>
          <p className="text-gray-600 dark:text-gray-100">{description ? description : ' '}</p>
        </div>
        {sectionButton}
      </section>
    </React.Fragment>
  )
}
export default SectionHeader
