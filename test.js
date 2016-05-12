var Application = require('spectron').Application
var assert = require('assert')

describe('application launch', function () {
  this.timeout(10000)

  before(function () {
    this.app = new Application({
      path: '/Users/vchimev/Downloads/Visual\ Studio\ Code.app/Contents/MacOS/Electron'
    })
    return this.app.start()
  })

  after(function () {
    // if (this.app && this.app.isRunning()) {
    //  return this.app.stop()
    // }
  })

  it('show vscode window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })

  it('click extensions icon', function () {
    return this.app.client.click('.extensions-statusbar')
  })

  it('select extensions install', function () {
    return this.app.client.keys('\uE007')
  })

  it('get html', function () {
    return this.app.client.getHTML('html').then(function (text) {
      console.log(text)
    })
  })

  it('enter NativeScript', function () {
    return this.app.client.keys('NativeScript')
  })

  // it('get html', function () {
  //   return this.app.client.getHTML('html').then(function (text) {
  //     console.log(text)
  //   })
  // })
})
