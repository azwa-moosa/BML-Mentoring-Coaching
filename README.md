# BML Mentoring & Coaching — UI Prototype

This is a fully self-contained **functional dummy prototype**.

It does **not** require:
- Node.js
- npm
- a database
- Microsoft login
- email
- Outlook
- Power Apps
- Power Automate

## Run it

### Easiest
Open `index.html` directly in a browser.

### VS Code Live Server
Right-click `index.html` → **Open with Live Server**.

### Simple Python server
```bash
python3 -m http.server 8080
```

Then open:
```text
http://localhost:8080
```

## Vercel
Upload/push this folder to GitHub, import it in Vercel and select **Other** as the framework preset.

No environment variables are required.

## What works

### Staff
- Staff dashboard
- Mentoring / Coaching selection
- Category → Expertise filtering
- Matching mentors
- Open slot selection
- Session request
- OPEN → PENDING
- My Sessions tabs
- Cancellation
- Feedback after completion

### Mentor
- Dashboard
- Monthly slot target
- Add/edit/delete open availability
- Review requests
- Select meeting location
- Accept request
- REQUESTED → ACCEPTED
- PENDING → BOOKED
- Decline request
- PENDING → OPEN

### HR
- Programme overview
- Booking status analytics
- Mentor availability overview
- Add/edit/deactivate mentors
- View/cancel/complete bookings
- Add/edit/delete open slots
- Add categories
- Add expertise

## Data
Prototype data is stored in browser `localStorage`.

Use **Reset prototype data** on the landing page whenever you want to restore the original demo.

## IT handoff
See `IT_HANDOFF.md`.


## Full directory included

This version contains all **49** people supplied for the prototype.

Fields retained:
- UID
- Name
- Job Title
- Division
- Type

Prototype service routing:
- **ICF → Coaching**
- **Mentor → Mentoring**
- **ICF/Mentor → Mentoring + Coaching**

All people have demo availability so they can appear in Staff search.

The existing 10 expertise options are retained. For demonstration only, expertise is mapped from job title/division so the filtering workflow is usable. IT should replace those illustrative mappings with formally approved expertise assignments for production.

The Mentor Portal demo user is **Fathimath Rayya Hilmy (UID 2515)**.
