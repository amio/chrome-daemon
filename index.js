const chromeLauncher = require('chrome-launcher')

const instances = []

function launch ({port = 9222, flags}) {
  return chromeLauncher.launch({
    port: port,
    chromeFlags: flags
  }).then(chrome => {
    instances.push({port, chrome})
  })
}

function kill ({port = 9222}) {
  const instance = instances.find(x => x.port === port)
  return instance
    ? instance.chrome.kill()
    : Promise.reject(new Error(`No chrome running on port ${port}`))
}

function restart ({port = 9222, flags}) {
  return kill({port}).then(launch({port, flags}))
}

module.exports = {
  instances,
  launch,
  kill,
  restart
}
