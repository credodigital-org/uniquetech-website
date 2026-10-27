# Unique Tech General Maintenance LLC

Responsive, front-end only React + Vite website with Home, About, Services, Projects and Contact pages. Home, About, Services, Projects and Contact are built against their supplied PDF references. Projects includes a working category filter; Contact includes the provided address, email and phone details, plus a front-end enquiry form. The re-shared image assets are used for the hero, wordmark, logo, About image, service cards, project cards and footer icons. Poppins is used to match the typography shown in the reference.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`. Deploy the project root to Vercel. No framework preset changes are needed.

## Before publishing

- The contact form opens a prefilled email to info@uniquetech.ae; direct in-page submission would require a form service or backend. Social profile URLs are placeholders because verified profile links were not supplied.
- The PDF encodes its text as Type 3 glyphs rather than an identifiable font file, so the original typeface name is unavailable. The CSS uses Poppins to closely match the visible letterforms.
- Replace the example domain in `public/robots.txt` and `public/sitemap.xml` before publishing.
- The enquiry form opens a prefilled email addressed to info@uniquetech.ae. For direct in-page submissions, connect a form provider or backend.
- Replace the sample project copy and photo with verified project details and approved photography. Social links are placeholders.
- The design does not make unverified claims about location, credentials, years in business, or project counts.

## Structure

```text
src/
├── App.jsx                 # Route definitions
├── main.jsx                # React entry point
├── Layouts/
│   └── PublicLayout.jsx    # Shared header/footer and page metadata
├── components/
│   ├── Header/Header.jsx
│   ├── Footer/Footer.jsx
│   └── PageHero/PageHero.jsx
├── data/
│   ├── navigation.js
│   └── services.js
├── pages/
│   ├── Home/Home.jsx
│   ├── About/About.jsx
│   ├── Services/Services.jsx
│   ├── Projects/Projects.jsx
│   └── Contact/Contact.jsx
├── styles.css              # Imports the organized stylesheet files
└── styles/
    ├── base.css            # Resets, typography and shared layout
    ├── navbar.css          # Top bar, desktop navigation and mobile menu
    ├── footer.css          # Footer layout and links
    ├── home.css            # Homepage sections
    ├── about.css           # About page and chairman logo frame
    ├── services.css        # Services page and cards
    ├── projects.css        # Projects page and filters
    ├── contact.css         # Contact page and enquiry form
    ├── shared.css          # Shared responsive and interaction rules
    └── motion.css          # Animations and reduced-motion rules
public/assets/              # Supplied images and icons
vercel.json                 # Client-side route fallback
```

Each page and reusable component has its own JSX file. Shared layout, navigation, and service content are kept separate so they're easy to find and edit. Styles are organized in `src/styles/` by page and shared component (navbar and footer), with `src/styles.css` importing them. Responsive layouts cover desktop, tablet, and mobile widths, with scroll reveal, hover/touch feedback, and reduced-motion support.


## Client details needed to activate enquiries

- Choose the form delivery provider (for example, Formspree or a small serverless endpoint) and provide account access or a provider form ID. Keep API/SMTP secrets in Vercel environment variables, never in browser code.
- Confirm the public phone number(s), WhatsApp-enabled number with country code, and the exact social profile URLs. The Contact PDF numbers are currently used for click-to-call.
- If sending mail from the business domain, provide domain/DNS access or ask the domain administrator to add the provider’s SPF/DKIM records. A verified sender address is also needed.
- Share the production domain and Vercel project access so form settings, sender checks and the sitemap URL can be finalized.

