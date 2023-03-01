module.exports = {
  // Check Typescript files
  './src/**/*.(ts|tsx)': () => 'pnpm tsc --noEmit --pretty',

  // Lint and format TypeScript and JavaScript files
  './src/**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --loglevel error --write ${filenames.join(' ')}`,
  ],

  // Format HTML, CSS, MarkDown and JSON
  './src/**/*.(html|css|md|json)': (filenames) =>
    `pnpm prettier --write ${filenames.join(' ')}`,
};
