# Trouser

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

To launch the local web app:

```sh
npm run dev # ctrl-c to quit
```

In your browser, open http://localhost:8001/ and see page-3 for the local json file browser.
