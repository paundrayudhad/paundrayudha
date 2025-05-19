import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const achievement = [
    { src: '/sertif/gamelab1.png', title: 'Sertifikat Kepesertaan Gamelab', link:'/sertif/gamelab1.pdf' },
    { src: '/sertif/pitcomfest2024.png', title: 'Pimpel X Pitcomfest', link:'/sertif/pitcomfest2024.pdf' },
    { src: '/sertif/lks2025.jpeg', title: 'Juara 2 LKS Tingkat Kota Surakarta', link:'/sertif/lks2025.pdf' },
    { src: '/sertif/baparekraf.png', title: 'Sertifikat kehadiran untuk Event [Offline Event] Baparekraf Developer Day 2024', link:'/sertif/baparekraf.pdf' },
];

export default function Achievement() {
    return (
      <>
        <Head>
          <title>Achievements - Paundra Yudha Dharmawan</title>
          <meta
            name="description"
            content="Things I’ve made trying to put my dent in the universe."
          />
        </Head>
        <SimpleLayout
          title="My Achievements"
          intro="Beberapa Pencapaian yang saya dapatkan"
        >
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 p-4"
          >
            {achievement.map((item, index) => (
            <Card as="li" key={index}>
              <Card.Image
                  src={item.src}
                  alt=""
                />
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={item.link}>{item.title}</Card.Link>
              </h2>
            </Card>
            ))}
          </ul>
        </SimpleLayout>
      </>
    );
  }
