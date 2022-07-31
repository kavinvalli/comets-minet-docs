const options = {
  projectLink: "https://github.com/kavinvalli/comets-docs", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/kavinvalli/comets-docs/blob/main", // base URL for the docs repository
  titleSuffix: " – Comets",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `© Comets ${new Date().getFullYear()}`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>Next.js Static Site Generator</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
    </>
  ),
};

export default options;
