module.exports = {
  // Check Typescript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit --pretty',

  // Lint and format TypeScript and                                             //JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Format HTML, CSS, MarkDown and JSON
  '**/*.(html|css|md|json)': (filenames) =>
    `pnpm prettier --write ${filenames.join(' ')}`,
};
