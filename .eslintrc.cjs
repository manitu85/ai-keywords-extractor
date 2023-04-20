const eslint = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/function-component-definition': 0,
    'react/no-array-index-key': 0,
    'react/state-in-constructor': 0,
    'react/prop-types': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/newline-after-import': 2,
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-restricted-imports': 0,
    'linebreak-style': 0,
    'no-mixed-operators': 1, // (a && b) || c;
    'no-duplicate-string': 0,
    'no-debugger': 0,
    'no-console': 0,
    'no-return-assign': ['error', 'except-parens'],
    'global-require': 0,
    'no-plusplus': 0,
    'no-unused-expressions': 1,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'func-names': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_e', '_id', '_m', '_n', '_t', '_text']
      }
    ],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ]
  },
  ignorePatterns: [
    '.turbo/*',
    'node_modules/*',
    'build/*',
    '!.prettierrc.cjs',
    '!vite.config.js',
    '.gitignore',
    'vercel.json',
    'pnpm-lock.yaml'
  ]
};

module.exports = eslint;

// # Exit Codes
// # "off" or 0 - turn the rule off
// # "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// # "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
