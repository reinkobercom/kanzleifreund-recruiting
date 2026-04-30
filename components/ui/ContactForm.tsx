'use client'
import { useState } from 'react'

interface FormState {
  name: string
  kanzlei: string
  telefon: string
  email: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', kanzlei: '', telefon: '', email: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', kanzlei: '', telefon: '', email: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded focus:outline-none focus:border-gold"

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-gold font-serif text-2xl mb-2">Vielen Dank.</p>
        <p className="text-white/70">Wir melden uns innerhalb von 24 Stunden.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text" required placeholder="Ihr Name"
        value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className={inputClass}
      />
      <input
        type="text" required placeholder="Kanzleiname"
        value={form.kanzlei} onChange={e => setForm(f => ({ ...f, kanzlei: e.target.value }))}
        className={inputClass}
      />
      <input
        type="tel" required placeholder="Telefonnummer"
        value={form.telefon} onChange={e => setForm(f => ({ ...f, telefon: e.target.value }))}
        className={inputClass}
      />
      <input
        type="email" required placeholder="E-Mail-Adresse"
        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="md:col-span-2 bg-gold text-white font-sans font-semibold py-4 px-8 rounded hover:bg-gold/90 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Gespräch anfragen'}
      </button>
      {status === 'error' && (
        <p className="md:col-span-2 text-red-400 text-sm text-center">
          Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
        </p>
      )}
    </form>
  )
}
