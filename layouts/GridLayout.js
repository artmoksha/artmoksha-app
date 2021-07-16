import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function GridLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <article>
        <a href="#">
          <img
            src="https://kutty.netlify.app/brand/og-white.png"
            className="object-cover w-full h-56 mb-5 bg-center rounded"
            alt="Kutty"
            loading="lazy"
          />
        </a>
        <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
          Development
        </p>
        <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
          <a href="#" className="text-gray-900 hover:text-purple-700">
            Process Documents Using Artificial Intelligence For RPA Bots
          </a>
        </h2>
        <p className="mb-4 text-sm font-normal text-gray-600">
          Earlier RPA bots used to have some limitations like it would take structured data for
          processing from excel, database, on these data. But with advancements in technology like
          OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of
          extracting these data …
        </p>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar h-12">
            <Image
              className="w-100 object-cover h-full rounded-full"
              src="https://kutty.netlify.app/placeholder.jpg"
              alt="Photo of Praveen Juge"
            />
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-900">Praveen Juge</p>
            <p className="text-sm text-gray-600">Jan 12, 2021</p>
          </div>
        </a>
      </article>
    </SectionContainer>
  )
}
