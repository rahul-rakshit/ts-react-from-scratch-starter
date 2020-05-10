# React/TypeScript/Webpack Setup from Scratch

Don't get me wrong. [`create-react-app`](https://create-react-app.dev/) is awesome. But when it's necessary to make some modifications, I'd rather work from a simple, minimal setup rather than having to deal with the madness of an ejected `create-react-app`.

## Differences to `create-react-app` setup

In my setup

- there is no `public` folder. Everything, including the `index.html` is taken from `src`.
- there is no [`babel`](https://babeljs.io/). I'm using the typescript compiler (via `ts-loader`) to supply bundleable code to webpack.
- `jest` tests are loaded using `ts-jest`, which is setup using `jest.config.js`. There is no additional webpack config for tests.
- the output folder is called `dist`, not `build`.
- `npm run dev` starts the dev server, not `npm start`.
- both the dev and prod server run on port 8080.
- there is no watch mode for tests. Just a weird personal preference; don't judge me for it.

## Similarities with `create-react-app` setup

- the `eslint` configuration extends the `create-react-app` [default](https://www.npmjs.com/package/eslint-config-react-app). I'm also using `prettier` on top of that, which I also do in my `create-react-app` packages.
- hot reloading and building works the same.

## Explanation of packages

- react testing library
  - `@testing-library/jest-dom` for extended assertions
  - `@testing-library/react` the library itself
  - `@testing-library/user-event` 🤷‍♂️
- webpack-related
  - `webpack` the library itself
  - `webpack-cli` to run webpack from the terminal
  - `webpack-dev-server` hot reloading
  - `ts-node` write webpack config in typescript
  - `html-webpack-plugin` generate HTML file from template
  - `shortid` generate random id for bundle (for cache busting)
- linting
  - `prettier` for autoformatting
  - `eslint` for linting
  - `@typescript-eslint/parser` to make eslint work with typescript
  - `@typescript-eslint/eslint-plugin` standard, basic typescript rules
  - `eslint-config-prettier` to make prettier rules part of eslint
  - `eslint-plugin-prettier` to make prettier rules part of eslint
  - other eslint dependencies to just extend the default `create-react-app` eslint rules

## Command to update all dependencies

`npm install --save react@latest react-dom@latest`

`npm install --save-dev @testing-library/jest-dom@latest @testing-library/react@latest @testing-library/user-event@latest @types/html-webpack-plugin@latest @types/jest@latest @types/react@latest @types/react-dom@latest @types/shortid@latest @types/webpack@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest eslint-config-prettier@latest eslint-config-react-app@latest eslint-plugin-flowtype@latest eslint-plugin-import@latest eslint-plugin-jsx-a11y@latest eslint-plugin-prettier@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest html-webpack-plugin@latest jest@latest prettier@latest shortid@latest ts-jest@latest ts-loader@latest ts-node@latest typescript@latest webpack@latest webpack-cli@latest webpack-dev-server@latest`

Just make sure the version of `jest` is the same that `ts-jest` wants. If you're not sure which version that is, then just update `jest` and run `npm test`.

If you want to keep your `eslint` base preferences (the ones you extend from) in sync with `create-react-app`, just the dependency versions from [there](https://www.npmjs.com/package/eslint-config-react-app).
