'use strict'

import { define } from './define'

class Devtool {
    version(): string {
        return define.WSD_DEF_APP_VERSION
    }
}

export let devtool = new Devtool() // 单例
