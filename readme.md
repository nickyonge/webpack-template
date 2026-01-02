# Webpack Template
Beginner-friendly template repository for creating a new project via Webpack, fast. Skip the setup, get to the dev.

## Installation 
- You should have [Node.js](https://nodejs.org/en) installed
- [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repo locally
   - Or just download as a .zip, Webpack functionality isn't contingent on having a GitHub repo
- Open VS Code (or your IDE of choice) to your project folder, and run these terminal commands: 
  - `npm i` (short for `npm install`), which installs all the packages defined in **package.json**
  - `npm start`, which launches Webpack and a dev server. Your browser should automatically open up a new tab to `localhost:8080`
- You're good to go!
  - Whenever you repoen your project and want to get back to work, run `npm start` again

> [!NOTE]
> The Webpack config file, **webpack.config.cjs**, is also on [GitHub Gist](https://gist.github.com/nickyonge/bb9fe46458c16e1cd560bce505e4af39) if you'd prefer to initialize your project from scratch.

## After Install

### If Using TypeScript
If you're using TypeScript or simply want to enforce JS type safety, drag and replace the contents from the [/typesafe](/typesafe) folder into the root directory. Also consider viewing the [TypeScript webpack docs](https://webpack.js.org/guides/typescript/).

### Update Important Files
Make modifications to the following files:

#### package.json
In **package.json**, edit the following fields:
- `"name":` &rarr; Your github username and repo name
  - eg, `"@nickyonge/webpack-template"`
- `"license":` &rarr; The license you're using. Not sure? Visit [choosealicense.com](https://choosealicense.com/), or use one of these common choices:
  - `"GPL-3.0-only"` &rarr; The [GPL3 License](https://choosealicense.com/licenses/gpl-3.0/), allows for any use *that is also open source*. This is my preferred license, because [FOSS💖](https://en.wikipedia.org/wiki/Free_and_open-source_software), but it's up to you!
  - `"MIT"` &rarr; The [MIT License](https://choosealicense.com/licenses/mit/). Common, allows for any use case, including closed-source.
  - `"ISC"` &rarr; The [ISC License](https://choosealicense.com/licenses/isc/). Functionally identical to the MIT License, with slightly streamlined language (though not quite as commonplace).
  - `"Unlicense"` &rarr; [The Unlicense](https://unlicense.org/) is an anti-license, committing your work to the public domain. It's what this repo uses, because (as a template) it's intended to be able to be used by anyone, for any purpose, inclusive of changing the license terms.
  - `""` or undefined &rarr; No license, [you're on your own](https://choosealicense.com/no-permission/) 😉
> [!TIP]
> For more info on license definition, see NPM's [package.json#license](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#license) documentation. If your repo is 100% private, consider adding `"private": true` to **package.json**.

The following **package.json** fields aren't strictly necessary unless you're publishing a package, or expect your project to be used by many people, and can be removed - but it's still not a bad idea to fill them out. 
- `"version":` &rarr; To keep track of project versioning (update as needed)
- `"author":` &rarr; Your name, \<email\>, and (URL), typically your GitHub URL
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

#### LICENSE
Be sure to modify your [LICENSE](LICENSE) file itself, not just the license field in **package.json**, unless you specifically want to continue using [the Unlicense](https://unlicense.org/).

> [!TIP]
> To change an existing license, click the ⚖️License icon in your repository's sidebar, and ✏️Edit the file. Copy the text from your preferred license - see above, or visit [choosealicense.com](https://choosealicense.com/).

#### README.md
Change your **README.md** to something that's not this, even if it's just "My Cool Repo, readme coming soon". Consider using [this handy template I found](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc) after thirty seconds of googling! Or simply delete it if you're a documentationless heathen 😘
