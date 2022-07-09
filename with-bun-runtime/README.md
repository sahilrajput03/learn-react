# React with Bun runtime

~Sahil, for using bun with existing react project you can do like:

```bash
# SRC:https://github.com/Jarred-Sumner/bun#using-bun-with-create-react-app

# To enable React Fast Refresh, ensure "react-refresh" is installed
npm install -D react-refresh

# Generate a bundle for your entry point(s)
bun bun ./src/index.js # jsx, tsx, ts also work. can be multiple files

# Start the dev server
bun dev
```

This is a React project boostrapped with bun.

## Getting Started

### Cloning the repo

```sh
bun create react ./app
# creates react `app` directory.
```

### Development

First, run the development server.

```
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying src/App.jsx. The page auto-updates as you edit the file.

