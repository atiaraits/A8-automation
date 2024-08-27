import { browser } from '@wdio/globals'


export default class Page {
  
    open (path) {
        return browser.url(`https://test.acceler8.com.au/${path}`)
    }
}
