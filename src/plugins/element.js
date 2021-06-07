import Vue from 'vue'
// 因为element-ui是按需导入的
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 全局注册(必须分行写 不知道为什么)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 特殊：把message弹窗组件挂载到vue原型上
Vue.prototype.$message = Message
