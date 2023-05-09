// Eslint: Fix eslint errors
const buildEslintCommand = ['pnpm lint:fix'];

// Prettier: Check and format
const buildFormatCommand = ['pnpm format', 'pnpm prettier'];

module.exports = {
  '*.{js,jsx}': buildEslintCommand,
  '*.{js,json,css,scss,md,mdx}': buildFormatCommand
};
