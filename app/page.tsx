
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-col gap-4'>
      <Link href="pie">pie</Link>
      <Link href="bar">bar</Link>
    </div>
    </>
  )
}
