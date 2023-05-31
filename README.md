# Module Federation: webpack vs vite
This repository show examples about microfrontends using Module Federation to compare webpack and vite.

## Examples
- [X] Webpack with eager loading
- [X] Webpack with lazy loading
- [X] [Basic exmple with vite]([https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/react-vite](https://github.com/jeissonmgz/module-federation-webpack-vite/tree/main/vite-simple-component))
- [X] Comunicate shell with 2 microfrontends

### webpack-eager
#### Launch shell
cd webpack-eager/shell
npm start
#### Launch mfe
cd webpack-eager/mfe
npm start
#### Launch mfe2
cd webpack-eager/mfe2
npm start

### webpack-on-demand
#### Launch shell
cd webpack-on-demand/shell
npm start
#### Launch mfe
cd webpack-on-demand/mfe
npm start

### vite-nesting-routes
#### Launch shell
cd vite-nesting-routes/shell
npm run dev
#### Launch emoji-mfe
cd vite-nesting-routes/emoji-mfe
npm run build:run
#### Launch color-mfe
cd vite-nesting-routes/color-mfe
npm run build:run