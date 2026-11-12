import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  createRootRoute,
  HeadContent,
  Link,
  Scripts,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kissena Baked Goods',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        <div className="min-h-screen bg-page text-ink">

          <header className="border-b border-edge">
            <div className="max-w-5xl mx-auto px-6 py-6">

              <nav className="flex gap-6">
                <Link to="/"
                  className="text-ink-soft hover:text-ink"
                  activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
                  activeOptions={{ exact: true }}>Home</Link>

                <Link to="/disclosures"
                  className="text-ink-soft hover:text-ink"
                  activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
                  activeOptions={{ exact: true }}>Disclosures</Link>
              </nav>

            </div>
          </header>

          <main className="max-w-5xl mx-auto px-6 py-10">
            {children}
          </main>

        </div>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />

        <Scripts />
      </body>
    </html>
  )
}