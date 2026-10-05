import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
<div className="min-h-screen bg-zinc-950 p-8">
  <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
    Welcome to QC Baked Goods
  </h1>

  <h2 className="mt-2 text-xl font-medium text-zinc-500">
    Financial Statements
  </h2>
</div>
  )
}
