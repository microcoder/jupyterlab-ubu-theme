# Jupyterlab Ubu Theme

Light theme for Jupyter Lab

<img src="https://raw.githubusercontent.com/microcoder/jupyterlab-ubu-theme/master/screenshots/jupyterlab-ubu-theme-1.png" />
<img src="https://raw.githubusercontent.com/microcoder/jupyterlab-ubu-theme/master/screenshots/jupyterlab-ubu-theme-2.png" />

## Prerequisites

* JupyterLab

## Installation

Installation from source code:

```bash
git clone https://github.com/microcoder/jupyterlab-ubu-theme
jupyter labextension install jupyterlab-ubu-theme
```

## Uninstallation

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
