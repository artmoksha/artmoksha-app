import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata.json'
import Logo from '@/data/logo.svg'
import Link from '@/components/Link'
import footerNavLinks from '@/data/footerNavLinks'
import Mail from '@/public/static/images/social-icons/mail.svg'
import Github from '@/public/static/images/social-icons/github.svg'
import Facebook from '@/public/static/images/social-icons/facebook.svg'
import Youtube from '@/public/static/images/social-icons/youtube.svg'
import Linkedin from '@/public/static/images/social-icons/linkedin.svg'
import Twitter from '@/public/static/images/social-icons/twitter.svg'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

const Footer = () => {
  return (
    <>
      <footer className="footer relative border-b-2 dark:bg-gray-800 px-8 py-0">
        <div className="px-4 pt-12 py-6 mx-auto max-w-7xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-3">
              <div className="flex">
                <Link href="/" aria-label="Artmoksha App">
                  <div className="flex items-center justify-between">
                    <div className="mr-3">
                      <Logo />
                    </div>
                    {typeof siteMetadata.headerTitle === 'string' ? (
                      <div className="hidden h-6 text-2xl font-semibold sm:block">
                        {siteMetadata.headerTitle}
                      </div>
                    ) : (
                      siteMetadata.headerTitle
                    )}
                  </div>
                </Link>
              </div>
              <p className="my-4 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis ante sit
                amet lacus malesuada hendrerit.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-md font-semibold tracking-wider text-blue dark:text-gray-100 uppercase">
                Resources
              </p>
              <nav className="mt-8">
                {footerNavLinks.resources.map((company) => {
                  return (
                    <Link
                      key={company.title}
                      type={company.type}
                      href={company.href}
                      className="flex mb-3 text-sm font-medium text-gray-800 dark:text-gray-400 transition md:mb-2 hover:text-blue dark:hover:text-blue"
                    >
                      {company.title}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="col-span-3 md:col-span-1 lg:col-span-2">
              <h4 className="mb-3 text-md font-semibold tracking-wider text-blue dark:text-gray-100 uppercase">
                About
              </h4>
              <nav className="mt-8">
                {footerNavLinks.about.map((company) => {
                  return (
                    <Link
                      key={company.title}
                      type={company.type}
                      href={company.href}
                      className="flex mb-3 text-sm font-medium text-gray-800 dark:text-gray-400 transition md:mb-2 hover:text-blue dark:hover:text-blue"
                    >
                      {company.title}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-md font-semibold tracking-wider text-blue dark:text-gray-100 uppercase">
                Connect
              </p>
              <nav className="mt-8">
                {footerNavLinks.connect.map((connect) => {
                  const SocialSvg = components[connect.kind]
                  return (
                    <Link
                      key={connect.title}
                      type={connect.type}
                      href={connect.href}
                      className="flex mb-3 text-sm font-medium text-gray-800 dark:text-gray-400 transition md:mb-2 hover:text-blue dark:hover:text-blue"
                    >
                      {connect.title}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="col-span-3">
              <p className="mb-3 text-md font-semibold tracking-wider text-blue dark:text-gray-100 uppercase">
                SUBSCRIBE
              </p>
              <form action="#" className="mb-2 mt-8 w-full">
                <div className="flex justify-center">
                  <input
                    className="w-2/3 rounded-t-l rounded-b-l"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    className="px-2 rounded-t-r rounded-b-r w-1/3 py2 bg-blue text-white border-t-r-1"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p className="mb-6 text-sm text-left text-gray-600 md:mb-0 dark:text-gray-400">
              © Copyright 2021 - artmoksha.com. All Rights Reserved.
            </p>
            <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
              <a
                href={'/privacy'}
                className="flex mb-3 text-sm font-medium text-gray-800 dark:text-gray-400 transition md:mb-2 hover:text-blue dark:hover:text-blue"
              >
                Terms
              </a>
              <a
                href={'/privacy'}
                className="flex mb-3 text-sm font-medium text-gray-800 dark:text-gray-400 transition md:mb-2 hover:text-blue dark:hover:text-blue"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
