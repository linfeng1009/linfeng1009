### 设置代理

    devServer下添加
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://www.linfengya.cn/',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },

### 关闭Eslint 

    在vue.config.js 设置 lintOnSave: false

### 请求接口设置

    .env.development  测试环境
    .env.production   发布环境

### 报错 sockjs?9be2:1609

    注释掉node_modules\sockjs-client\dist\sockjs.js 
    第1609行的 
    self.xhr.send(payload)

### 开启左侧导航栏的Logo

    修改src目录下的setting.js的
    sidebarLogo: true
    然后\src\layout\components\Sidebar\Logo.vue    data中修改logo图片

### 这里自定义路由拦截器

    src/permission.js
    根据用户角色动态挂载路由


### 这里定义登录用户名的验证函数

***<b style="color:red;">这里要进行修改</b>***
    
    src/utils/validate.js

    方法validUsername 验证用户名的规则改为：

    `str.trim().length > 0`

    代表 只需要输入用户名即可

### 这是定义发送ajax请求 请求拦截 状态码

    src/utils/request.js

### 前端实现动态路由

    在src/store/modules/Promission.js 修改asyncRoutes的数据来源 
    后端返回数据格式:
```
asyncRoutes=[{"path":"/permission","component":"#","redirect":"/permission/page","alwaysShow":true,"name":"Permission","meta":{"title":"permission","icon":"lock","roles":["admin","editor"]},"children":[{"path":"/permission/page","name":"PagePermission","meta":{"title":"pagePermission","roles":["admin"]}},{"path":"/permission/directive","name":"DirectivePermission","meta":{"title":"directivePermission"}},{"path":"/permission/role","name":"RolePermission","meta":{"title":"rolePermission","roles":["admin"]}}]},{"path":"/icons","component":"#","children":[{"path":"/icons/index","name":"Icons","meta":{"title":"icons","icon":"icon","noCache":true}}]},{"path":"/example","component":"#","redirect":"/example/list","name":"Example","meta":{"title":"example","icon":"el-icon-s-help"},"children":[{"path":"/example/create","name":"CreateArticle","meta":{"title":"createArticle","icon":"edit"}},{"path":"/example/edit/:id(\\d+)","name":"EditArticle","meta":{"title":"editArticle","noCache":true,"activeMenu":"/example/list"},"hidden":true},{"path":"/example/list","name":"ArticleList","meta":{"title":"articleList","icon":"list"}}]},{"path":"/tab","component":"#","children":[{"path":"/tab/index","name":"Tab","meta":{"title":"tab","icon":"tab"}}]},{"path":"/error","component":"#","redirect":"noRedirect","name":"ErrorPages","meta":{"title":"errorPages","icon":"404"},"children":[{"path":"/error-page/401","name":"Page401","meta":{"title":"page401","noCache":true}},{"path":"/error-page/404","name":"Page404","meta":{"title":"page404","noCache":true}}]},{"path":"/error-log","component":"#","children":[{"path":"/error-log","name":"ErrorLog","meta":{"title":"errorLog","icon":"bug"}}]},{"path":"/excel/","component":"#","redirect":"/excel/export-excel","name":"Excel","meta":{"title":"excel","icon":"excel"},"children":[{"path":"/excel/export-excel","name":"ExportExcel","meta":{"title":"exportExcel"}},{"path":"/excel/select-excel","name":"SelectExcel","meta":{"title":"selectExcel"}},{"path":"/excel/merge-header","name":"MergeHeader","meta":{"title":"mergeHeader"}},{"path":"/excel/upload-excel","name":"UploadExcel","meta":{"title":"uploadExcel"}}]},{"path":"/zip","component":"#","redirect":"/zip/index","alwaysShow":true,"name":"Zip","meta":{"title":"zip","icon":"zip"},"children":[{"path":"/zip/index","name":"ExportZip","meta":{"title":"exportZip"}}]},{"path":"/pdf","component":"#","redirect":"/pdf/index","children":[{"path":"/pdf/index","name":"PDF","meta":{"title":"pdf","icon":"pdf"}}]},{"path":"/pdf/download","hidden":true},{"path":"/theme","component":"#","children":[{"path":"/theme/index","name":"Theme","meta":{"title":"theme","icon":"theme"}}]},{"path":"/clipboard","component":"#","children":[{"path":"/clipboard/index","name":"ClipboardDemo","meta":{"title":"clipboardDemo","icon":"clipboard"}}]},{"path":"/i18n","component":"#","children":[{"path":"/i18n-demo/index","name":"I18n","meta":{"title":"i18n","icon":"international"}}]},{"path":"*","redirect":"/404","hidden":true}]

```
    并使用@/utils/transformAsyncRoutes文件下的transformAsyncRoutes方法
    整理并动态导入页面模块 使component成为可被路由解析的对象
    并把整理好的数据 赋值给 @\store\modules\permission.js 文件下 generateRoutes方法中的accessedRoutes变量

***<b style="color:red;"> 注意： 路由中的path路径必须和文件名保持一致！！！  </b>***


### 发布上线时候 注意

    删掉vue.config.js中的   before: require('./mock/mock-server.js')