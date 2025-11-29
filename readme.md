# Webpack Template

Template repository for creating a new project via Webpack, fast.

The Webpack config file, **webpack.config.cjs**, is also on [GitHub Gist](https://gist.github.com/nickyonge/bb9fe46458c16e1cd560bce505e4af39) if you'd prefer to initialize your project from scratch.

## Installation 

- You should have [Node.js](https://nodejs.org/en) installed
- Clone this repo
- Open VS Code (or your IDE of choice) to your project folder, and enter these two commands: 
  - `npm i` (short for `npm install`)
  - `npm start`
- You're good to go!
  - Whenever you repoen your project and want to get back to work, run `npm start` again
 
> [!NOTE]
> If you're using TypeScript or simply want to enforce JS type safety, drag and replace the contents from the /typesafe folder into the root directory. Also consider viewing the [TypeScript webpack docs](https://webpack.js.org/guides/typescript/).

### After Install

In **package.json**, edit the following fields:
- `"name":` &rarr; Your github username and repo name
  - eg, `"@nickyonge/webpack-template"`
- `"license":` &rarr; The license you want to use. Not sure? Visit [choosealicense.com](https://choosealicense.com/), or use one of these common choices:
  - `"GPL-3.0-only"` &rarr; The [GPL3 License](https://choosealicense.com/licenses/gpl-3.0/), allows for any use *that is also open source*. This is my preferred license, because [FOSS💖](https://en.wikipedia.org/wiki/Free_and_open-source_software), but it's up to you!
  - `"MIT"` &rarr; The [MIT License](https://choosealicense.com/licenses/mit/). Common, allows for any use case, including closed-source.
  - `"ISC"` &rarr; The [ISC License](https://choosealicense.com/licenses/isc/). Functionally identical to the MIT License, with slightly streamlined language (though not quite as commonplace).
  - `""` or undefined &rarr; No license, [you're on your own](https://choosealicense.com/no-permission/) ;)

The following package.json fields aren't strictly necessary unless you're publishing a package, or expect your project to be used by many people, and can be removed - but it's still not a bad idea to fill them out. 
- `"version":` &rarr; To keep track of project versioning (update as needed)
- `"author":` &rarr; Your name, <email>, and (URL), typically your GitHub URL
  - eg, `"Nick Yonge <nick@duckpond.studio> (https://github.com/nickyonge)"`
- `"description":` &rarr; Short description of your project
- `"keywords":` &rarr; Any relevant keywords for your project, comma-separated 
- `"homepage":` &rarr; Your project homepage, typically your GitHub repo followed by `#readme`
  - eg, `"https://github.com/nickyonge/webpack-template#readme"`
- `"repository": { "url":` &rarr; Your project's [remote Git URL](https://docs.github.com/en/get-started/git-basics/about-remote-repositories)
  - eg, `"git+https://github.com/nickyonge/webpack-template.git"`
- `"bugs": { "url":` &rarr; Your project's issue tracker, typically your GitHub repo's issues page
  - eg, `"https://github.com/nickyonge/webpack-template/issues"`

> [!IMPORTANT]
> For `license`, `author`, `homepage`, `repository`, and `bugs`, remember to at least remove the demo values. Those were included as leaving those fields blank can cause parsing issues (and is straight-up not allowed for `bugs`), and to serve as friendly nudges to modify them later. If you publish your project and notice that the issue tracker link is a plea for banana pancake recipes, that's more likely to elicit a change than an empty field 🍌🥞
