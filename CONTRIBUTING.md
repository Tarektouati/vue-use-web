# Contributing

First of all, thanks for taking interest into contributing to this project, below is what you need to know about it.

### Getting Started

Fork the repository, or clone it:

```bash
git clone https://github.com/logaretm/vue-use-web.git
```

Install dependencies using [yarn](https://yarnpkg.com)

```bash
yarn
```

### Folder Structure

As you can see we have:

- `src` contains the working code for the repository:
- `docs`: contains the src and built files for the documentation, we use [vuepress](https://vuepress.vuejs.org/) to generate the docs content.
- `scripts`: has all our custom scripts used to bundle the project, release the docs and localization files generation.

Currently we have no tests at the moment.

### Issues

When creating issues, please provide as much details as possible. A clear explanation on the issue and a reliable production example can help us greatly in improving this project. Your issue may get closed if it cannot be easily reproduced so please provide a working example using either [Codesandbox](https://codesandbox.io/) or [jsfiddle](https://jsfiddle.net/). Your example should only focus on the issue, it should be minimal and clearly produces the issue.

If your issue gets closed for not providing enough info or not responding to the maintainers' comments, do not consider it a hostile action. There are probably other issues that the maintainers are working on and must give priority to issues that are well investigated, you can always revisit the issue and address the reasons that it was closed and we will be happy to re-open it and address it properly. Sometimes a commit will close your issue without a response from the maintainers so make sure you read the issue timeline to prevent any misunderstandings.

### Code Style

The code style is enforced with `eslint` and `prettier` and is checked automatically whenever you commit. Any violation of the code style may prevent merging your contribution so make sure you follow it. And yes we love our semi-colons.

### Commit Style

Commit messages are enforced with `commitlint` which is configured to help you write a suitable commit message, the checks are run automatically when you commit.

### Contributing To The Docs

If you want to contribute to the docs you can find it in the `docs` folder.

The docs require `./dist/vue-use-web.esm` as dependency to run successfully in your local machine. You can generate this dependency by executing the following command from the root of the repository:

```bash
yarn build

# or
npm run build
```

And then you can run vuepress local dev server by running:

```bash
yarn docs:dev
# or
npm run docs:dev
```

### Pull Requests

- Make sure you fill the PR template provided.
- PRs should have titles that are clear as possible.
- Make sure that your PR is up to date with the branch you are targeting, use `git rebase` for this.
- Unfinished/In-Progress PRs should have `[WIP]` prefix to them, and preferably a checklist for ongoing todos.
- Make sure to mention which issues are being fixed by the PR so they can be closed properly.
- Make sure to preview all pending PRs to make sure your work won't conflict with other ongoing pull-request.
- Coordinate with ongoing conflicting PRs' authors to make it easier to merge both your PRs.

### Source Code

Currently we are using TypeScript for the source code. So make sure you are familiar with it, we don't use classes anywhere so the code should be more JavaScripty.

### Testing

Currently there are no tests, go nuts!

### Building

Use this command to build all project bundles and localization files:

```bash
yarn build
# or
npm run build
```

