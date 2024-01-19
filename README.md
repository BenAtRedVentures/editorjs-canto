![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Canto Tool

Canto Block for the [Editor.js](https://codex.so/editor).

![](assets/gif/demo.gif)

## Features

Allows adding canto previews to your articles.

**Note:** this Tool requires server-side implementation for canto data fetching. See [backend response format](#server-format) for more details.

## Installation

Get the package

```shell
yarn add @drewble/editorjs-canto
```

Include module at your application

```javascript
import CantoTool from "@drewble/editorjs-canto";
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  ...

  tools: {
    ...
    canto: {
      class: CantoTool,
      config: {
        endpoint: 'http://localhost:8008/canto_url', // Your backend endpoint for url data fetching,
      }
    }
  },

  ...
});
```

## Config Params

Canto Tool supports these configuration parameters:

| Field    | Type     | Description                                         |
| -------- | -------- | --------------------------------------------------- |
| endpoint | `string` | **Required:** the endpoint for canto data fetching. |
| headers  | `object` | **Optional:** the headers used in the GET request.  |

## Output data

This Tool returns `data` with following format

| Field | Type     | Description                                                                                                                            |
| ----- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| image | `string` | Specified image's url                                                                                                                  |
| meta  | `object` | Fetched image's data. Any data got from the backend. Currently, the plugin's design supports the 'title', 'alt', and 'caption' fields. |

```json
{
  "type": "CantoTool",
  "data": {
    "link": "https://codex.so",
    "meta": {
      "title": "CodeX Team",
      "site_name": "CodeX",
      "description": "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
      "image": {
        "url": "https://codex.so/public/app/img/meta_img.png"
      }
    }
  }
}
```

## Backend response format <a name="server-format"></a>

You can implement a backend for canto data fetching your own way. It is a specific and trivial task depending on your
environment and stack.

Backend response **should** cover following format:

```json5
{
  success: 1,
  link: "https://codex.so", // Optionally return a link to set the hyperlink URL
  meta: {
    // ... any fields you want
  },
}
```

**success** — uploading status. 1 for successful, 0 for failed

**link** - Optional response parameter to override the URL provided

**meta** — link fetched data.

Currently, the plugin's design supports the 'title', 'alt', 'image', and 'caption' fields. They should have the following format in the response:

```json5
{
  success: 1,
  meta: {
    title: "CodeX Team",
    alt: "A description of the image contents",
    caption: "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
    src: "https://codex.so/public/app/img/meta_img.png",
  },
}
```

Also, it can contain any additional fields you want to store.

# About CodeX

<img align="right" width="120" height="120" src="https://codex.so/public/app/img/codex-logo.svg" hspace="50">

CodeX is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐                           | Join 👋                                | Twitter                                      | Instagram                                       |
| ---------------------------- | -------------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| [codex.so](https://codex.so) | [codex.so/join](https://codex.so/join) | [@codex_team](http://twitter.com/codex_team) | [@codex_team](http://instagram.com/codex_team/) |
