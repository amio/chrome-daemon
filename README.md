# chrome-daemon

Manage Google Chrome with Node.js.

## Install

`npm i chrome-daemon` then:

```javascript
const { launch, kill, restart } = require('chrome-daemon')
```

## API

- `launch({ port = 9222, flags = []})`
- `kill({ port = 9222 })`
- `restart({ port = 9222 })`

## License

ISC @ [Amio](https://github.com/amio)
