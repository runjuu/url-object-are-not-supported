import { Logo } from "@/app/logo";

import { Metadata } from "next";

const logo = {
  images: ["https://user-images.githubusercontent.com/12002941/109744693-b0f1fc80-7c0d-11eb-9cbc-d6efd919e89c.jpg"]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    // https://github.com/vercel/next.js/blob/8d228780e72706ef4bd5b6327ede2c0340181353/packages/next/src/lib/metadata/resolvers/resolve-opengraph.ts#L49-L51
    // Next.js will mutate objects in place
    openGraph: { images: logo.images },
  }
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Logo images={logo.images} />
    </main>
  )
}
