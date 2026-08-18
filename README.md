
  # portfolio

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
  

  What you still need to do on GoDaddy + GitHub
1. GoDaddy DNS
Log into GoDaddy DNS for megaux.design and add:

A records for apex domain (@):
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
CNAME record for www → sathiyendren.github.io (replace with your GitHub username/org if different).
2. GitHub repo settings
Go to Settings → Pages.
Source: your normal deploy method (GitHub Actions / gh-pages branch / dist folder).
Under Custom domain, enter megaux.design and save.
Wait a few minutes for DNS propagation and the HTTPS certificate to be issued.
3. After it’s live
The old www.uxnd.in references inside the bundled app are now gone from siteConfig.ts and index.html. The only uxnd.in remnants that may remain are inside the pre-generated PDF resume content itself, which would need a new PDF export to change.

Let me know once DNS is set and I can verify the domain is resolving.