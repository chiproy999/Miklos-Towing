# Miklos-Towing Automation Suite

## What This Repo Does
Miklos-Towing is a Tulsa-based towing company. This repo contains scripts and configs that  
* automate Google Business Profile updates  
* capture and route web leads to SMS/email in under 30 s  
* generate SEO-optimized page content and schema markup  
Goal: cut PPC spend 40 % while doubling organic calls in six months.

## Quick Start
1. Clone and `cd` into the folder  
2. Copy `.env.example` to `.env`, then add your API keys (Twilio, OpenAI, etc.)  
3. `npm install` (or `pip install -r requirements.txt`)  
4. `npm run dev` starts the webhook listener at <http://localhost:3000>

## Folder Guide
* `/scripts` – one-off utilities (bulk GBP post uploader, review responder)  
* `/src` – main serverless functions for lead capture  
* `/docs` – SOPs and marketing playbooks (PDF/Markdown)

## Roadmap
* [ ] Integrate Facebook Lead Ads webhook  
* [ ] Add error logging to BigQuery  
* [ ] Write Cypress tests for form flow

## Contributing
Open a PR from a feature branch; keep messages in present tense (“Add webhook handler”).  
Run `npm test` before pushing.

## License
MIT – do whatever, just don’t blame us if it breaks.

## Contact
Kevin — kevin@profitvisionmarketing.com
