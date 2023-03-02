# Google Clone

A google clone using google credentials and context key

## Introduction

This is a google clone, the project is created using svelte kit framework. Uses Googleapis and tries to mimic the UI and frontend behaviors of the official google site as much as possible.

## Installation

```bash
git clone https://github.com/iswilljr/google-clone.git
cd spotify-clone
yarn
```

### Env Variables

`API_KEY` and `CTX` are required to use googleapis.

You can get the api key [Here](https://console.cloud.google.com/projectcreate). Then go to the dashboard > APIs & Services > Credential, then click on show key, copy and paste the api key on an `.env` file like this:

```env
API_KEY=...
```

You can get the context [here](https://programmablesearchengine.google.com/controlpanel/create). Then go to the dashboard > Overview > Basic > Search engine ID, copy and paste on the `env` file. finally the `env` file should look like this:

```env
API_KEY=...
CTX=...
```

## License

This project is [MIT licensed](./LICENSE)
