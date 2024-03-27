import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Paundra Yudha Dharmawan</title>
        <meta
          name="description"
          content="A little bit about me, Paundra Yudha Dharmawan."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              A little bit about me 🙋‍♂️
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve graduated from University of Computer Studies, Mandalay
                with a Bachelor of Computer Science in Software Engineering in
                2013. After my graduation, I moved to Yangon and started my
                career as a junior software engineer in 2017.
              </p>
              <p>
                My interest in computers started when I used to go to the
                library in our small town with friends. We’d study and play
                games on public computers. I found joy in using computers and
                realized they could be used to create amazing things. That’s
                when my addiction to learning about computers became a big part
                of my life.
              </p>
              <p>
                Apart from my main interests in gaming, listening to orchestral
                music, and reading, I’m also a huge fan of space and cosmology.
                During my free time, I delve into research about space, science,
                and technology. I particularly enjoy listening to podcasts like
                StarTalk Radio by Neil deGrasse Tyson, The Why Files, and
                Huberman Lab by Andrew Huberman.
              </p>
              <p>
                Right now, I’m into making things that can help lots of people
                worldwide. Whether it’s through technology or other means, I’m
                passionate about creating a positive impact. Apart from that, I
                also enjoy traveling with my family, making memorable
                experiences together.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/TonyYe99"
                icon={TwitterIcon}
              >
                Follow on X
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/BatOfGothem"
                icon={FacebookIcon}
                className="mt-4"
              >
                Follow on Facebook
              </SocialLink>
              <SocialLink
                href="https://github.com/tonyye99"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ye-htet-aung"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ygxan18@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ygxan18@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
