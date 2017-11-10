# running

1. npm install
2. npm run watch
3. OR npm run dev
4. OR npm run prod

## What is this for
A very simple example of webpack configuration that does a couple of things:

- prepares index.html with all required scripts and stuff
- rebuild & reload on javascript change while developing
- javascript export is wrapped as a UMD module so it can be scoped locally or globally depending on the build process
- build sugrass(stylus like syntax) & reload on change
- postcss process for styles, class names are locally scoped so there is no spillage into global namespace
- modules used in several entries(common libraries) are separated into commons chunk
- common config extracted and reused for development and production builds
- production minified build

Note: it's not completely production ready and should be tweaked and adjusted according to specific needs

