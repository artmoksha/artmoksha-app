import Image from 'next/image'

const Slide = () => {
  return (
    <section className="section-hero dark:bg-gray-800 py-12 px-8 shadow">
      <div className="container xl:max-w-7xl justify-between mx-auto md:flex md:items-center">
        <section className="flex w-full justify-center items-center items-start">
          <div className="text-center md:text-left">
            <h1 className="mb-8 leading-10 md:leading-15 hero-title text-4xl font-bold dark:text-gray-100">
              The Best Place to Collect Buy and Sell AWESOME NFTs
            </h1>
            <p className="leading-7 my-8 text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor sit amet
            </p>
            <button className="btn bg-blue transition duration-300 hover:bg-white hover:border-blue focus:outline-none hover:text-blue text-white transition duration-300 border rounded border-transparent px-8 py-2">
              Get Started
            </button>
          </div>
          <div className="py-6 text-center hidden  md:block">
            <Image
              src={('/static/images/gfx-d-dark.png')}
              height={340}
              width={680}
              className="w-full object-contain h-96 rounded "
              alt="he Best Place to Collect Buy and Sell AWESOME NFTs"
            />
          </div>
        </section>
      </div>
    </section>
  )
}
export default Slide
