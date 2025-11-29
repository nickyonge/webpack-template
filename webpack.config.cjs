/* WEBPACK TEMPLATE SETUP 
 * webpack.config.cjs
 * webpack.config.js
   
 * All the steps for getting a new Webpack-based website started via VS Code! 
   This script itself is a file called webpack.config.cjs and is used to tell Webpack how to build your site.
   
 * If you want to skip to a Webpack-functional website that's ready to go, see the Webpack Template repository:
   https://github.com/nickyonge/webpack-template
   
 * If you want to set up your own Webpack project (recommended to do at least once), start with the prerequisites below! 
    
   
 * NOTE: The filename can be webpack.config.cjs or .js at your discretion. Using .cjs is recommended. Details at end of guide. 
   
   
 *  --- PREREQUISITES --- 
   
 * - Install VS Code, https://code.visualstudio.com
 * - Install Node.js, https://www.nodejs.org
        Note: During installation, you should generally allow the installer to set up other packages like Chocolatey
        If a popup appears installing additional tools, just keep Pressing Any Key until the installation is complete.
        Helpful but optional: Node.js tutorial for VS Code: https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
 * - Create your directory folder,
        "My Cool Website That Is Going To Make The World Better For Everyone",
        and place this file in it. Open it up in VS Code
 * - Time to get started!
 * 
 * 
 *  --- SHORT SUMMARY --- 
 * 
 * Once prereqs are fulfilled, and this file (webpack.config.cjs) is placed in a new directory: 
 * 
 * 1: Run the following three terminal commands:         (use Ctrl + ` / Cmd + ` to open the terminal)
        npm init -y
 *          (If you get error text saying "The term 'npm' is not recognized", ensure node.js is installed)
        npm i webpack webpack-cli webpack-dev-server webpack-remove-empty-scripts css-loader html-webpack-plugin mini-css-extract-plugin postcss-loader --save-dev
        npm i typescript jquery --save
 * 2: Add the following values to package.json's "scripts":{} array:
        "start": "webpack serve --open",
        "start:dev": "webpack serve --mode=development --open",
        "start:prod": "webpack serve --mode=production --open",
        "build": "webpack --mode=production",
        "preview": "npx http-server dist"
 *         (package.json will be auto-created in your parent directory. You'll find the scripts array 
 *         inside it with a few values prepopulated - just copy+paste these!)
 * 3: Fill out the SITE_TITLE in the Config region of this file, below
        SITE_TITLE should be the name of your beautiful new website. You can ignore the other values for now. 
            PRODUCTION_BUILD should be false while you're in development mode, and true when you're ready to launch 
            SRC_FOLDER, OUTPUT_FOLDER, and INDEX_FILE should be left "src", "dist", and "./js/index.js", respectively
 * 
 *       Done! Run command "npm start" to get underway
 *       Consider starting by making a src/ directory and index.js inside of it (steps 9/10 in the detailed instructions below)
 *          (Remember to uncomment the "entry" module rule on line 102) 
 * 
 
 *  --- DETAILED STEPS --- 
 *    with terminal cmds
 * 
 * 1: Create new folder (project, vscode workspace, github repo, etc), and place this file in it
 * 2: install npm
        npm init -y
 * 3: initialize webpack and its CLI as dev dependencies 
        npm install webpack webpack-cli --save-dev
 * 4: initialize webpack dev server as a dev dependencies, for local testing at url "localhost:8080"
        npm install webpack-dev-server --save-dev
 * 5: initialize HTML Webpack Plugin as a dev dependency, to auto-generate .html files in ./dist folder upon build 
        npm install html-webpack-plugin --save-dev
 * 6: add the following values to package.json's "scripts": {} array
        "start": "webpack serve --open",
        "start:dev": "webpack serve --mode=development --open",
        "start:prod": "webpack serve --mode=production --open",
        "build": "webpack --mode=production",
        "preview": "npx http-server dist"
 *          to enable terminal commands "npm run build" and "npm run start", respectively 
 * 7: Optionally, prep CSS loader, PostCSS loaders and Mini CSS Extract Plugin, all as dev dependencies, to import/export .css files from ./src
        npm install css-loader postcss-loader mini-css-extract-plugin --save-dev
 *          If not doing this step, you can remove CSS / mini plugin references from this file 
 *          Note: We're using mini-css-extract-plugin instead of style-loader to control CSS file output 
 * 8: Optionally, import the JQuery and TypeScript libraries, 
        npm install jquery typescript
 *          Note: Omit the --save-dev! These aren't dev-only dependencies.
 *          If not doing this step, you can remove the JQuery references from this file. 
 * 9: create a ./src subfolder with a /js subfolder, and inside it, a file called index.js 
 * 10: Fill out the values in the Config region of this file, below
        PRODUCTION_BUILD should be while you're in development mode 
        SITE_TITLE should be the name of your beautiful new website
        SRC_FOLDER and INDEX_FILE should be left "src" and "./js/index.js", respectively
 * 
 * 
 * 
 *      Done! Now go make a beautiful website.
 *          Use command "npm start" :) 
 * 
 * 
 * 
 * A NOTE ON .JS vs .CJS EXTENSION (webpack.config.cjs) 
    Using .cjs tells the compiler to use the CommonJS module system, the original standard for Node.js. 
    This means the compiler will NOT spend any time looking for more modern modules, eg ECMAScript (ES). 
 *  This guide is written referencing "webpack.config.cjs", which is the encouraged format to use.
    It's suggested both because explicit naming is encouraged, and to bypass VSCode sugugestions.
    Using "cjs" simply disables a VSCode Intellisense suggestion on they keyword "require", such as 
        const path = require('path');
    The suggestion encourages you to convert the line to ES syntax, "import { path } from 'path';". 
    This is all well and good, but it breaks Webpack if it's not configured for ES6+. 
    This Webpack setup is not configured for it, as the intent was to keep this setup lightweight. 
    For more info on using ECMAScript, see: https://webpack.js.org/api/module-methods/ 
    For other config file languages, see: https://webpack.js.org/configuration/configuration-languages/ 
   
   
 * If you want to dig deeper, here's Webpack's official Getting Started guide: 
   https://webpack.js.org/guides/getting-started/
  
 * by Nick Yonge
   https://gist.github.com/nickyonge/bb9fe46458c16e1cd560bce505e4af39

*/

// tutorial complete ~
// done? consider deleting the above tutorial section, or moving it to the end of this file.
// you may end up modifying webpack config quite a bit! Might as well have the content up top.

// For more on webpack.config.js, see the config docs: https://webpack.js.org/configuration/ 




// #region Config 


/** Export webpack bundle in Production mode, or Development? 
 * - **Note:** Remember to close & restart Webpack if changed, via `npm start` 
 * @see {@linkcode environment} for runtime mode detection @type {boolean} */
const PRODUCTION_BUILD = false;

/** Your site title; the text that will appear in the browser tab. @type {string} */
const SITE_TITLE = '💖 Webpack is for Lovers 💖';

/** Name of your source code folder. It should be in the same directory as `webpack.config.js` 
 * itself. Don't put `webpack.config.js` *in* the source folder. @type {string} */
const SRC_FOLDER = 'src';

/** Name of the folder where build output will be exported. @type {string} */
const OUTPUT_FOLDER = 'dist';

/** Filepath of your index script, relative to 
 * {@linkcode SRC_FOLDER}. Must begin with `./` or `/`. @type {string} */
const INDEX_FILE = './js/index.js';

// #endregion Config



/** The `node:path` module provides utilities for working with file and directory paths. 
 * @see https://github.com/nodejs/node/blob/v24.x/lib/path.js */
const path = require('path');
/** The `node:path` module provides utilities for working with file and directory paths. 
 * @see https://github.com/nodejs/node/blob/v24.x/lib/path.js */
const webpack = require('webpack');
/** Handles creation of HTML files to serve your webpack bundles. 
 * @see https://webpack.js.org/plugins/html-webpack-plugin/ */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/** Extracts CSS into separate files. We use it to control how CSS files are output for our project. 
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/ */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/** A Webpack plugin to remove empty JavaScript files generated when using style-only entries.
 * @see https://github.com/webdiscus/webpack-remove-empty-scripts */
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

/** 
 * Defines the runtime build environment
 * 
 * To determine what the current environment is in your codebase, use:  
 * `process.env.NODE_ENV`  
 * which will return a string matching either `"production"` or 
 * `"development"`, depending on the value of {@linkcode PRODUCTION_BUILD}.
   @example
   const _env = process.env.NODE_ENV;
   const isDevBuild = _env === 'development';
   if (isDevBuild) { 
       // Do secret sneaky dev-only stuff here! 
   }
 */
const environment = PRODUCTION_BUILD ? 'production' : 'development';

module.exports = () => {

    return {

        /** The runtime build environment, either `"production"` or `"development"`
         * @see {@linkcode PRODUCTION_BUILD} */
        mode: environment,

        /** Reference to {@linkcode SRC_FOLDER} build path */
        context: path.resolve(__dirname, SRC_FOLDER),

        /** Entry point to begin generating runtime webpage from */
        entry: {
            /** Index file, the initially loaded script.
             * @see {@linkcode INDEX_FILE} */
            index: INDEX_FILE,
        },
        /** List of all webpack plugins we're using @type {webpack.WebpackPluginInstance[]} */
        plugins: [
            // define webpack plugins here 
            new RemoveEmptyScriptsPlugin(),
            new HtmlWebpackPlugin({
                title: SITE_TITLE,
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css',
                runtime: false,
            }),
        ],

        /** Protocol for source mapping, so we can see lines/error info in browser console output
         * @see https://webpack.js.org/guides/development/#using-source-maps @type {string} */
        devtool: PRODUCTION_BUILD ? 'source-map' : 'eval-cheap-source-map',
        // for prod builds, either use 'source-map' (full sourcemap in separate file, unsecure but easy live debugging) or false (no sourcemap included)
        // see: https://webpack.js.org/configuration/devtool/#devtool

        /** Enable webpack dev server so we can locally test 
         * @see https://webpack.js.org/guides/development/#using-webpack-dev-server */
        devServer: {
            static: OUTPUT_FOLDER,
        },

        /** 
         * Defines how the {@link https://webpack.js.org/concepts/modules modules} in this project will be treated.
         * @see https://webpack.js.org/configuration/module/ */
        module: {
            rules: [

                // Jquery 
                {
                    test: require.resolve("jquery"),
                    loader: "expose-loader",
                    options: {
                        exposes: ["$", "jQuery"],
                    },
                },

                // CSS loading 
                {
                    test: /\.(sc|c)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader, // extract css to subfolder 
                        'css-loader',
                        'postcss-loader',
                        // 'sass-loader',
                        // 'style-loader',
                    ],
                },

                // Images asset loading
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },

                // Fonts asset loading
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },

            ],
        },

        /** Output options for builds
         * @see https://webpack.js.org/configuration/output/  */
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, OUTPUT_FOLDER),
            assetModuleFilename: '[path][name][ext]',
            clean: true,
        },

        /** Build time optimization options
         * @see https://webpack.js.org/configuration/optimization */
        optimization: {
            runtimeChunk: false,
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        type: 'css/mini-extract', // use type, not test 
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
            removeEmptyChunks: true,
        },
    };
};
