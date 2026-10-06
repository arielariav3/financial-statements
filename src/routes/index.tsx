import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home,})

function Home() {
  return (
    
    <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
      <div className="border-b border-zinc-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Welcome to Kissena Baked Goods</h1>
        <h2 className="mt-2 text-xl font-medium text-zinc-500">Financial Statements</h2>
      </div>
      <p className="mt-6 text-md text-green-200">We are a new company. Year 2025 is our first full 
        year of operations. On this site, we will disclose the financial statements for our 
        investors.</p>







  </div>

    )
}