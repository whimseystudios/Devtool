'use strict'

export class MsgDef {
    // 插件系统消息类型定义
    // H_H：hoster main <-> hoster page
    static PSM_HM_2_HP: string                  = '101' // hoster main -> hoster page
    static PSM_HP_2_HM: string                  = '102' // hoster page -> hoster main
    static PSM_H_H_GET_PLUGINS_INFO: number     = 1001
    static PSM_H_H_MAKE_PLUGINS_STATUS: number  = 1002
    static PSM_H_H_SHOW_PLUGINS_WINDOW: number  = 1003
    // H_PM：hoster main <-> plugin main
    static PSM_HM_2_PM: string                  = '201' // hoster main -> plugin main
    static PSM_PM_2_HM: string                  = '202' // plugin main -> hoster main
    static PSM_H_PM_MESSAGE_TEST: number        = 2001
    // H_PP：hoster main <-> plugin page
    static PSM_HM_2_PP: string                  = '301' // hoster main -> plugin page
    static PSM_PP_2_HM: string                  = '302' // plugin page -> hoster main
    static PSM_H_PP_GET_PLUGIN_IDENTIFY: number = 3001
    static PSM_H_PP_MESSAGE_TEST: number        = 3002
    // P_H_P：plugin main <-> hoster main <-> plugin page
    static PSM_PM_2_HM_2_PP: string             = '401' // plugin main -> hoster main -> plugin page
    static PSM_PP_2_HM_2_PM: string             = '402' // plugin page -> hoster main -> plugin main
    static PSM_P_H_P_MESSAGE_TEST: number       = 4001
    // P_P：plugin main <-> plugin page
    // static PSM_PM_2_PP: string               = '501' // plugin main -> plugin page // 已由 plugin_id 代替
    // static PSM_PP_2_PM: string               = '502' // plugin page -> plugin main // 已由 plugin_id 代替
    static PSM_P_P_MESSAGE_TEST: number         = 5001
}

export class Message {
    dest: string = '' // 接收
    from: string = '' // 发送
    psid: string = '' // 识别
    func: number = 0 // 功能
    code: number = 0 // 结果
    info: string = '' // 信息
    task: number = 0 // 任务
    page: number = 0 // 批次
    size: number = 0 // 总数
    last: boolean = true // 结束
    data: any = null // 数据

    constructor(dest: string, from: string, psid: string, func: number, code: number, info: string, task: number, page: number, size: number, last: boolean, data: any) {
        this.dest = dest
        this.from = from
        this.psid = psid
        this.func = func
        this.code = code
        this.info = info
        this.task = task
        this.page = page
        this.size = size
        this.last = last
        this.data = data
    }
}
