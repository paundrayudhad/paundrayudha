import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import arSmm from '@/images/project/ar-smm.jpg'
import edugamePhoto from '@/images/project/edugame.jpg'
import kompak from '@/images/project/kompak.png'
import ninetynite from '@/images/project/ninetynite.png'
import songfess from '@/images/project/songfess.png'
import laundry from '@/images/project/laundry.png'
import wahyuconvert from '@/images/project/wahyuconvert.png'
import heptasyn from '@/images/project/heptasyn.png'
import ptmeep from '@/images/project/ptmeep.png'

const projects = [
  {
    name: 'Edugame',
    description:
      'Website Edugame yang digunakan dengan Articulate Storyline.',
    link: { href: 'https://github.com/paundrayudhad/edugame', label: 'github.com' },
    image: edugamePhoto,
  },
  {
    name: 'AR-SMM',
    description: 'Website Social Media Marketing yang menyediakan layanan followers, like, dan lain lain',
    link: { href: 'https://ar-smm.my.id', label: 'ar-smm.my.id' },
    image: arSmm,
  },
  {
    name: 'Kompak News',
    description: 'Website Portal Berita yang dibuat dengan menggunakan PHP Native dan MYSQL',
    link: { href: 'https://github.com/paundrayudhad/kompaknews', label: 'github.com' },
    image: kompak,
  },
  {
    name: 'Ninetynite',
    description: 'Sebuah Landing Page untuk Brand Ninetynite yang dibuat menggunakan NextJS',
    link: { href: 'https://ninetynite.vercel.app', label: 'ninetynite.vercel.app' },
    image: ninetynite,
  },
  {
    name: 'Menfess/Songfess',
    description: 'Sebuah website untuk mengirim Anonymous Message yang dibuat menggunakan Frontend NextJS dan Backend PHP + MySQL',
    link: { href: 'https://menfessrpl.vercel.app/', label: 'menfessrpl.vercel.app' },
    image: songfess,
  },
  {
    name: 'Sistem Manajemen Laundry',
    description: 'Sistem Manajemen Laundry ini dirancang untuk membantu operasional laundry dengan fitur manajemen cabang, layanan, pengguna, transaksi, dan laporan. Dibuat dengan Techstack Laravel 11 + MySQL + Blade Template',
    link: { href: '#', label: '' },
    image: laundry,
  },
  {
    name: 'Wahyu Convert',
    description: 'Membuat Website berupa landing page untuk website convert pulsa ke E-Money',
    link: { href: 'https://wahyuconvert.store/', label: 'wahyuconvert.store' },
    image: wahyuconvert,
  },
  {
    name: 'Prom  Night Ticketing Website',
    description: 'Website untuk Ticketing Prom Night Heptasyn dengan menggunakan NIS dan Nama Siswa untuk mengamankan agar tidak ada siswa dari sekolah lain',
    link: { href: 'https://heptasyn.my.id', label: 'heptasyn.my.id' },
    image: heptasyn,
  },
  {
    name: 'Company Profile Agriculture',
    description: 'Website Company Profile PT. Mataram Energi Eksplorasi Produksi (MEEP) adalah perusahaan yangbergerak di bidang agrikultur dan lingkungan dibuat dengan',
    link: { href: 'https://ptmeep.com/', label: 'ptmeep.com' },
    image: ptmeep,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Paundra Yudha Dharmawan</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="My Projects."
        intro="Beberapa project yang telah saya  buat dan bisa anda lihat dibawah"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 p-4"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <Card.Image
                  src={project.image}
                  alt=""
                />
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
