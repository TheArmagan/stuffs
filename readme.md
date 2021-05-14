# STUFFS
Some useful stuffs packed to here.

## Utilities

- getFileExtension
- hexToRgb
- intToRgba
- randomFloat
- randomInteger
- randomPick
- randomString
- rejectAfter
- rgbaToInt
- rgbToHex
- sleep
- isThenable


### Update history

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
