import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    // Simulate async send
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
  }

  return (
    <section id="contact" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in touch</h2>
        <p className="text-white/70 mt-2">Have a challenge in mind? Let's talk data.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input required name="name" placeholder="Name" className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input required type="email" name="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <textarea required name="message" rows={5} placeholder="Message" className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />

          <div className="flex items-center gap-3">
            <button disabled={status!=='idle'} className="px-4 py-2 rounded-md bg-white text-black font-medium disabled:opacity-60">
              {status==='sending' ? 'Sending…' : status==='sent' ? 'Sent ✓' : 'Send message'}
            </button>
            {status==='sent' && <span className="text-white/70 text-sm">Thanks! I’ll reply shortly.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
