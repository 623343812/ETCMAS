import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from "element-ui"


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//把弹框组件挂载到vue的原型属性上
Vue.prototype.$message = Message
