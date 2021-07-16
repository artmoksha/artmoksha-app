import siteMetadata from '@/data/siteMetadata'
import {PageSeo} from '@/components/SEO'
import Image from 'next/image'
import Link from '@/components/Link'

export default function About() {
    const ourTeam = [
        {
            id: '1',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '2',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '3',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '4',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '5',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '6',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '7',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '8',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
        {
            id: '9',
            name: 'Lorem Ipsum',
            position: 'Co-founder',
            bio: 'this is the bio',
            team: 'core',
            photo: '/static/images/blog/blog-1.png',
            social: {
                twitter: 'twitter/art',
                phone: '+91-99999-88888',
                facebook: 'facebook.com/art',
                youtube: 'youtube.com/art',
            },
        },
    ]
    return (
        <>
            <PageSeo
                title={`About - ${siteMetadata.author}`}
                description={`About me - ${siteMetadata.author}`}
                url={`${siteMetadata.siteUrl}/about`}
            />
            <section className="page bg-white mb-20 dark:bg-gray-900">
                <div className="px-4 py-24 mb-20 text-left bg-gray-50 dark:bg-gray-800 md:text-center">
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-gray-100">
                        Meet Our team
                    </h1>
                    <p className="text-base text-gray-500 md:text-lg">
                        At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis
                        nihil quod,
                    </p>
                </div>

                <div className="container xl:max-w-5xl px-4 mx-auto">
                    <h1 className="text-3xl font-prompt text-center text-gray-800 dark:text-gray-100 font-bold leading-none mb-32">
                        Core team
                    </h1>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {ourTeam.map((team) => {
                            return (
                                <div
                                    key={team.id}
                                    className="w-full mb-16 shadow py-8 rounded border-0 bg-white dark:bg-gray-800"
                                >
                                    <div className="flex justify-center -mt-24 light-blue">
                                        <Image
                                            src={team.photo}
                                            alt="a picture"
                                            height="100"
                                            width="100"
                                            className="rounded-full bg-white p-2 border-gray-400"
                                        />
                                    </div>
                                    <div className="card-content-text-content">
                                        <div className="card-content-text-content-about">
                                            <h4 className="pt-4 text-lg font-bold leading-8 tracking-tight text-center">
                                                {team.name}
                                            </h4>
                                            <p className="pb-2 font-normal leading-8 tracking-tight text-center">
                                                {team.position}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center w-full">
                                        <Link href={'javascript:void(0)'} className={'text-red'}>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    <h1 className="text-3xl font-prompt text-center text-gray-800 dark:text-gray-100 font-bold leading-none mb-32">
                        Advisors
                    </h1>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {ourTeam.splice(0, 3).map((teamMember) => {
                            return (
                                <div
                                    key={teamMember.id + '-team'}
                                    className="w-full mb-16 shadow py-8 rounded border-0 bg-white dark:bg-gray-800"
                                >
                                    <div className="flex justify-center -mt-24 light-blue">
                                        <Image
                                            src={(teamMember.photo)}
                                            alt={teamMember.name}
                                            height="100"
                                            width="100"
                                            className="rounded-full bg-white p-2 border-gray-400"
                                        />
                                    </div>
                                    <div className="card-content-text-content">
                                        <div className="card-content-text-content-about">
                                            <h4 className="pt-4 text-lg font-bold leading-8 tracking-tight text-center">
                                                {teamMember.name}
                                            </h4>
                                            <p className="pb-2 font-normal leading-8 tracking-tight text-center">
                                                {teamMember.position}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center w-full">
                                        <Link href={'javascript:void(0)'} className={'text-red'}>
                                            Read More
                                        </Link>
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
