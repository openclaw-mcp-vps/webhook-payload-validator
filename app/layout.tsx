import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebhookGuard – Validate Webhook Payloads',
  description: 'Monitor incoming webhooks, validate against defined schemas, and get alerted when payloads change or malformed data arrives.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2836a0bc-ded9-41f2-b8d6-aeb78f64c5bf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
