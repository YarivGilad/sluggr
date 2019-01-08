const slugger = require('./index')
const marker = require('@ajar/marker')

marker.d('i am a very long text','and i am too')
marker.magenta(slugger('i am a very long text','and i am too'))
