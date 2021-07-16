import React from 'react'

class Subscription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      description: this.props.description,
    }
  }

  render() {
    return (
      <>
        <section className="section-newslettesr dark:bg-gray-900 py-12 px-12">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-4xl font-bold leading-none text-center font-prompt">Sign up now</h1>
            <p className="font-medium text-center">
              At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis
              nihil quod,
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button
                className="w-full  bg-blue border-transparent focus:outline-none
                                hover:border-blue border transition duration-300
                                 rounded-full hover:text-blue hover:border-blue hover:bg-white text-white px-8 py-3"
              >
                Get started
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Subscription
