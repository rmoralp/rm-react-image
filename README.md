# rm / React Image ⚡

Minimalistic, blazing fast and seo friendly component for React ⚛️

The main objective is to achieve the best possible performance without penalizing SEO. Also, it use W3C img attributes.

## Features
- ⚡️ Optimized for performance
- 📈 SEO friendly
- 😪 Lazy load support
- 🌇 Loading and error placeholders
- 🔁 Server side support (SSR)
- ☝ No dependencies, just one possible polyfill: intersection-observer polyfill
🗜️ x KB gzipped (plus 1KB if you need intersection-observer)

Overview
React Slidy is a simple and minimal slider component. The main objective is to achieve the best performance and smoothness on React apps, specially on mobile 📱.

## Installation
```
# Yarn
$ yarn add @rm/react-image

# NPM
$ npm i --save @rm/react-image
```

## `LazyLoadImage` usage

```javascript
import React from 'react';
import { Image } from 'rm-react-image';

const deviceUserAgent = 'googlebot'

const MyImage = ({ alt, height, src, width }) => (
  <Image
    alt={alt}
    src={src}
    width={width}
    height={height}
    loading="lazy"
    userAgent={deviceUserAgent} />
);

export default MyImage;
```

### Props

| Prop | Type | Default | Description |
|:---|:---|:---|:---|
| alt | `String` |  | Indicate the alternate fallback content to be displayed if the image has not been loaded |
| base64Placeholders | `Object` | `{loading: undefined, error: undefined}` | Define Base64 placeholder |
| className | `String` | | Element class name |
| decoding | `String` | | Represents a hint given to the browser on how it should decode the image. |
| height | `String` or `Number` | | Indicates the rendered height of the image in CSS pixels. |
| loading | `String` | | Determine whether to load the image immediately (`eager`) or on an as-needed basis (`lazy`). |
| onError | `Function` | | Callback triggered if an error occurs while loading an external file. |
| onLoad | `Function` | | Callback triggered if image load successfully. |
| sizes | `String` | | This string specifies a list of comma-separated conditional sizes for the image; that is, for a given viewport size, a particular image size is to be used. Read the documentation on the sizes page for details on the format of this string. |
| src | `String` |  | Contains the full URL of the image including base URI. |
| srcSet | `String` | | This specifies a list of candidate images, separated by commas (`',', U+002C COMMA`). Each candidate image is a URL followed by a space, followed by a specially-formatted string indicating the size of the image. The size may be specified either the width or a size multiple. Read the srcset page for specifics on the format of the size substring. |
| style | `Object` | | Css style properties to inline them. |
| userAgent | `String` | | Device user agent used for improve rendering strategy. |
| width | `String` or `Number` | | Indicates the rendered width of the image in CSS pixels. |
## Browser compatibility
Supported browsers are:

- Chrome
- Firefox
- Safari 6+
- Internet Explorer 11+
- Microsoft Edge 12+

**If some of them doesn't work, please fill an issue.**

## Contribution

See [Contributing Guide](https://github.com/rmoralp/rm-react-image/tree/main/.github/contributing.md).

## License

MIT