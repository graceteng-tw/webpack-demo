import dynamic from 'next/dynamic'

const Card = dynamic(() => import('components/card'), { ssr: false });
const Goose = dynamic(() => import('components/goose'), { ssr: false });

export default function Home() {
  return (
    <Card><Goose /></Card>
  )
}
