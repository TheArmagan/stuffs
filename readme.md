# STUFFS

Some useful stuffs packed to here.

## Utilities

- accurateSleep
- chunkify
- chunkifyString
- combinations
- defaultify
- escapeRegex
- execAsync
- fillGaps
- formatDuration
- formatSeconds
- getFileExtension
- getValueType
- hexToRgb
- intToRgba
- isThenable
- makeSureFileExists
- makeSureFileExistsSync
- makeSureFolderExists
- makeSureFolderExistsSync
- mapReplace
- parseDuration
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
- validateShape

### Update history

#### 0.1.40
- Added `cronMinutesTrigger(minuteMarks, callback)`. Eg: `cronMinutesTrigger([0, 15, 30, 45], () => { console.log("Triggered"); })`
- Added `cronHourTrigger(hourMarks, callback)`. Eg: `cronHourTrigger([0, 6, 12, 18], () => { console.log("Triggered"); })`
- Added `cronDayTrigger(dayMarks, callback)`. Eg: `cronDayTrigger([0, 3, 5], () => { console.log("Triggered"); })`

#### 0.1.36
- Added `chunkifyString(str, chunkSize, separator?)`. Eg: `chunkifyString("Hello, world!", 7, ",")` -> `["Hello", " world!"]`

#### 0.1.32
- Added `formatDuration(ms, formatting?)`. Eg: `formatDuration(600000000)` -> `6 days, 22 hours, 40 minutes`

#### 0.1.29

- Added recursive option to `mapReplace(text, map, recursive=true)`. Eg: `mapReplace({ test: 1, test2: "hello", deep: { test3: "world" } }, {"hello": "hey", "world": "guy"}, true) => { test: 1, test2: "hey", deep: { test3: "guy" } }`

#### 0.1.23

- `combinations(["1","2","3"])` added. Eg: [...combinations(["1","2","3"])] -> [["1"],["2"],["1","2"],["3"],["1","3"],["2","3"],["1","2","3"]]

#### 0.1.22

- `parseDuration(str)` added. Eg: parseDuration("1m30s") -> 90000

#### 0.1.21

- Much better Typescript support.

#### 0.1.20

- Typescript support.

#### 0.1.19

- `mapReplace(text, map)` now `map` argument supports entry mappings. Eg: `[[/a/g, "aaa"], [/b/g, "bbb"]]`;

#### 0.1.18

- `fillGaps(array)` added. Eg: fillGaps([1, 2, 5]) -> [1, 2, 3, 4, 5]

#### 0.1.15

- Fixed `defaultify()` on arrays..

#### 0.1.14

- `validateShape(data, originalData, recursive=true)` added. Validates object shape based on original object types.
- `getValueType(value)` added. Eg: getValueType("") -> String, getValueType([]) -> Array

#### 0.1.13

- `defaultify(data, defaultData, recursive=true)` added.

#### 0.1.12

- `execAsync(cmd, cwd?)` added.

#### 0.1.11

- `execAsync(cmd)` added.

#### 0.1.10

- `escapeRegex(str)` added.

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
