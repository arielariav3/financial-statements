import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
      <div className="border-b border-zinc-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Welcome to Kissena Baked Goods</h1>
        <h2 className="mt-2 text-xl font-medium text-zinc-500">Financial Statements</h2>
      </div>

      <p className="mt-6 text-md text-green-200">We are a new company. Year 2025 is our first full 
        year of operations. On this site, we will disclose the financial statements for 
        our investors.</p>

      <div className="bg-zinc-900 m-10">
        <button className="bg-zinc-800 text-zinc-100 font-medium px-6 py-3 m-5 rounded-xl border 
        border-zinc-700/60 shadow-lg hover:bg-zinc-700 hover:text-white hover:border-zinc-500 
        active:scale-95 transition-all duration-100">
  Click Here
</button>


        <button>Click Here</button><button>Click Here</button><button>Click Here</button>
      </div>
    </div>
  )
}