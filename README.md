# jupyterlab-ubu-theme

Light theme for Jupyter Lab

## Prerequisites

* JupyterLab

## Installation

Installation from source code:

```bash
git clone https://github.com/microcoder/jupyterlab-ubu-theme
jupyter labextension install jupyterlab-ubu-theme
```

## Uninstall

```bash
jupyter labextension uninstall jupyterlab-ubu-theme
jupyter lab build
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
