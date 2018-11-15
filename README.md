# Trouser

## Requirements

Node 10.13.0 (LTS at the time of writing this) or above is required, so is npm. You'll need git to fetch the source code and a modern web browser with JavaScript enabled to use the web app.

To install node (and npm) on GNU/Linux or MacOS:

https://github.com/mklement0/n-install

```sh
sudo apt-get install git make
curl -L https://git.io/n-install | bash
# and start a new terminal/shell
```

## Installation

In a new terminal/shell (if you just installed n-install):

```sh
git clone https://github.com/millette/trouser.git
cd trouser/
mkdir -p custom/f2/
npm install
```

Put your json files in trouser/custom/f2/ and subdirectories. Standard json files with the .json extension will show up in the browser and be available if they consist of an array of objects, like:

```json
[
  {
    "id": 1234,
    "name": "roberto"
  },
  {
    "id": 1234,
    "name": "roberta"
  }
]
```

Note that `id` doesn't have a special meaning.

## Usage

To launch the local web app:

```sh
npm run dev # ctrl-c to quit
```

In your browser, open http://localhost:8001/ and see page-3 for the local json file browser.
