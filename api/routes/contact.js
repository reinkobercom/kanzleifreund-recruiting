const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

const LEADS_FILE = path.join(__dirname, '..', 'leads.json')

function readLeads() {
  if (!fs.existsSync(LEADS_FILE)) return []
  return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'))
}

function writeLead(lead) {
  const leads = readLeads()
  leads.push(lead)
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
}

router.post('/', (req, res) => {
  const { name, kanzlei, telefon, email } = req.body

  if (!name || !kanzlei || !telefon || !email) {
    return res.status(400).json({ error: 'Alle Felder sind erforderlich.' })
  }

  const lead = {
    id: Date.now(),
    name,
    kanzlei,
    telefon,
    email,
    createdAt: new Date().toISOString(),
  }

  writeLead(lead)
  console.log('New lead:', lead)

  res.status(200).json({ success: true })
})

module.exports = router
