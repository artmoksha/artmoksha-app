import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata.json'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/common/MobileNav'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow fixed inset-x-0 z-50">
      <nav className="py-3 container xl:max-w-7xl px-4 mx-auto">
        <div className="flex items-center justify-between ">
          <div className="flex">
            <Link href="/" aria-label="Artmoksha App">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Image
                    src={('/static/images/app-logo.png')}
                    alt={siteMetadata.headerTitle}
                    height={48}
                    width={48}
                  />
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
          <div className="flex">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  type={link.type}
                  href={link.href}
                  className={
                    link.type === 'button'
                      ? 'bg-blue hover:bg-white text-white hover:text-blue py-1 px-6 border border-transparent hover:border-blue transition duration-300 rounded'
                      : 'p-1 font-medium md:px-2 text-gray-900 sm:p-4 dark:text-gray-100 dark:hover:text-blue hover:text-blue active:text-blue-400'
                  }
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
