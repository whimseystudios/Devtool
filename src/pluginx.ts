'use strict'

import { EventEmitter } from 'events'

import { MsgDef, Message } from './msgdef'

export interface IPlugin { // 规范插件接口定义
    plugin: any, // 宿主进程 plugin 插件管理模块实例
    instance: any, // 继承实现 PluginX 插件功能模块实例
    plugin_id: string, // 认证识别代码
    plugin_key: string, // 插件索引标识

    Construction: (plugin: any, instance: any, plugin_id: string, plugin_key: string) => void,
    Deconstruction: () => void,

    SendMessageHosterMain?: (event: EventEmitter, message: Message) => void, // 可选
    RecvMessageHosterMain?: (event: EventEmitter, message: Message) => void, // 可选
    SendMessageHosterMainPluginPage?: (event: EventEmitter, message: Message) => void, // 可选
    RecvMessagePluginPageHosterMain?: (event: EventEmitter, message: Message) => void, // 可选

    Initialize: () => boolean,
    StartPlugin: () => boolean,
    StopPlugin: () => boolean,
    Uninitialize: () => boolean
}

export class PluginX extends EventEmitter {
    plugin: any = null
    instance: any = null
    plugin_id: string = ''
    plugin_key: string = ''

    constructor() {
        super()
        console.log('PluginX: Constructor')
    }

    Construction(plugin: any, instance: any, plugin_id: string, plugin_key: string): void {
        this.plugin = plugin
        this.instance = instance
        this.plugin_id = plugin_id
        this.plugin_key = plugin_key
        this.on(MsgDef.PSM_HM_2_PM, this.RecvMessageHosterMainTest)
        this.on(MsgDef.PSM_PP_2_HM_2_PM, this.RecvMessagePluginPageHosterMainTest)
        console.log('PluginX: Construction')
    }

    Deconstruction(): void {
        this.removeListener(MsgDef.PSM_HM_2_PM, this.RecvMessageHosterMainTest)
        this.removeListener(MsgDef.PSM_PP_2_HM_2_PM, this.RecvMessagePluginPageHosterMainTest)
        console.log('PluginX: Deconstruction')
    }

    RecvMessageHosterMainTest = (event: EventEmitter, message: Message): void => {
        if(this.instance.RecvMessageHosterMain) { // 不存在则为 undefined
            this.instance.RecvMessageHosterMain(event, message)
        }
    }

    RecvMessagePluginPageHosterMainTest = (event: EventEmitter, message: Message): void => {
        if(this.instance.RecvMessagePluginPageHosterMain) { // 不存在则为 undefined
            this.instance.RecvMessagePluginPageHosterMain(event, message)
        }
    }

    Initialize(): boolean {
        return true
    }

    StartPlugin(): boolean {
        return true
    }

    StopPlugin(): boolean {
        return true
    }

    Uninitialize(): boolean {
        return true
    }
}
