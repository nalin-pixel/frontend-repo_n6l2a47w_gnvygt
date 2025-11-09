import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Input = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}</span>
    <input {...props} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
  </label>
);

const TextArea = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm text-white/80">{label}</span>
    <textarea {...props} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[120px]" />
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email';
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus(`error:${err}`);
      return;
    }
    setStatus('submitting');
    try {
      await new Promise((res) => setTimeout(res, 900));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error:Something went wrong');
    }
  };

  const errorMsg = status.startsWith('error:') ? status.replace('error:', '') : null;

  return (
    <section id="contact" ref={sectionRef} className="relative bg-black text-white py-20">
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <Input label="Name" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
              <Input label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
              <TextArea label="Message" name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project" />

              {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition disabled:opacity-60"
              >
                <Mail className="w-4 h-4" />
                {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send message'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-2 rounded-lg border border-green-400/20 bg-green-400/10 p-3 text-green-300"
                >
                  Thanks! I’ll get back to you shortly.
                </motion.div>
              )}
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-lg font-semibold">Prefer email?</h3>
            <p className="mt-2 text-white/70">Reach me directly at <a className="underline hover:text-white" href="mailto:you@example.com">you@example.com</a>. I typically respond within 1-2 business days.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
