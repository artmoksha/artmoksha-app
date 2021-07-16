import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
// section featured
import Featured from '@/components/section/Featured'
import Slide from '@/components/slide'
import Collections from '@/components/section/Collections'
import Process from '@/components/section/Process'
import WhyArtmoksha from '@/components/section/Vision'
import Subscription from '@/components/common/Subscription'

import History from '@/components/section/History'

import steps from '@/data/process'
import collections from '@/data/collections'
import vision from '@/data/features'
import artworks from '@/data/artworks'
import history from '@/data/history'

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <Slide />
      <Featured artworks={artworks} />
      <Collections collections={collections} />
      <Process steps={steps} />
      <WhyArtmoksha vision={vision} />
      <Subscription />
    </>
  )
}
