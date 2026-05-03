export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Validate Webhook Payloads<br />
          <span className="text-[#58a6ff]">Before They Break Your App</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Get a unique webhook URL, define your expected JSON schema, and receive instant alerts when payloads drift or malformed data arrives.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Validating – $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: 'Unique Webhook URLs', desc: 'One endpoint per integration. Share it with any third-party service.' },
          { title: 'JSON Schema Validation', desc: 'Define expected shapes. Every incoming payload is checked automatically.' },
          { title: 'Instant Alerts', desc: 'Email or Slack notifications the moment a payload fails validation.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-3 mb-8">
            {[
              'Unlimited webhook endpoints',
              'Custom JSON schema per endpoint',
              'Real-time validation dashboard',
              '30-day payload history',
              'Email & Slack alerts',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does webhook validation work?',
              a: 'You define a JSON Schema for each endpoint. When a payload arrives, it is validated against that schema. Failures trigger an alert and are logged in your dashboard.',
            },
            {
              q: 'Which services can I monitor?',
              a: 'Any service that sends HTTP webhooks — Stripe, GitHub, Shopify, Twilio, or your own internal APIs. Just point them at your unique WebhookGuard URL.',
            },
            {
              q: 'What happens if my schema changes?',
              a: 'You can update your schema at any time. WebhookGuard will alert you if incoming payloads no longer match, so you catch breaking changes before they affect production.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} WebhookGuard. All rights reserved.
      </footer>
    </main>
  )
}
