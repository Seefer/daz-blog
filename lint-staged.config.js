// next lint command builder as per lint-staged instructions:
// https://nextjs.org/docs/basic-features/eslint

const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  // run next lint
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],

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
