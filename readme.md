# STUFFS
Some useful stuffs packed to here.

## Utilities

- accurateSleep
- chunkify
- defaultify
- formatSeconds
- getFileExtension
- hexToRgb
- intToRgba
- isThenable
- makeSureFileExists
- makeSureFileExistsSync
- makeSureFolderExists
- makeSureFolderExistsSync
- mapReplace
- percent
- randomFloat
- randomInteger
- randomPick
- randomString
- rejectAfter
- rgbaToInt
- rgbToHex
- sleep
- threeDots


### Update history

#### 0.1.9
- `mapReplace(text, map)` added.
  - Example: `mapReplace('Hello, world!', {'world': 'Universe'})`

#### 0.1.8
- `formatSeconds(seconds)` added. Formats seconds to cool-looking string. formatSecond(363) -> '06:03'

#### 0.1.7
- `chunkify(array, chunkSize)` added. Chunks an array into smaller arrays.

#### 0.1.6
- `accurateSleep(milliseconds)` added. For much better for millisecond-level accuracy. But uses more resources.

#### 0.1.5
- Some changes on `defaultify`.

#### 0.1.4
- `makeSureFolderExists(path)` added.
- `makeSureFolderExistsSync(path)` added.
- `makeSureFileExists(path, content, encoding?)` added.
- `makeSureFileExistsSync(path, content, encoding?)` added.

#### 0.1.3
  - `defaultify(data, defaultData)` added. (Data is a object)

#### 0.1.2
  - `percent(part, total, maxVal?, nanVal?)` added.
  - `threeDots(text, maxLength)` added.

#### 0.1.1
  - `isThenable(any)` added.

#### 0.1.0

- Code cleaned.
- You can now only get only parts you need. (eg. `require('stuffs/lib/randomString')`)
- Better readme.
- `randomString(length?, map?)` added.
  - Some maps added for random string.
      - `randomString.STRING_MAP_HEX`
      - `randomString.STRING_MAP_NUMERIC`
      - `randomString.STRING_MAP_ALPHABET_LOWER`
      - `randomString.STRING_MAP_ALPHABET_UPPER`
      - `randomString.STRING_MAP_ALPHANUMERIC`
- `rejectAfter(ms, reason?)` added.
  - Throws an error after some time.
