const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin');  // gzip插件
// 全局scss配置
const globalSass = config => {
  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach((item) => {
      item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
              resources: './src/styles/common.scss'  //相对路径
          })
          .end()
  })
}

// element-plus自动导入的插件
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: process.env.NODE_ENV === 'development',

  // webpack配置
  configureWebpack: {
    // name: 'xxx',
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src')
    //   }
    // },
    // 排除打包
    // externals: process.env.NODE_ENV === 'production' ? {
    //   'element-plus': 'ElementPlus'
    // } : {},

    plugins: process.env.NODE_ENV === 'production' ? [
      new CompressionPlugin()
    ] : [
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
    ]
  },

  // // webpack配置
  // configureWebpack: config => {

  //   // 对生产环境的配置
  //   if (process.env.NODE_ENV === 'production') {

  //     // 去掉console.log
  //     // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

  //     const plugns = [
  //       // 代码压缩
  //       new CompressionPlugin()
  //     ]
  //     config.plugins.push(...plugns)

  //     // 省略其他
  //     config.externals = {
  //       'element-plus': 'ElementPlus'
  //     }

      
  //   }

  //   const plugins1 = [
  //     // element-plus自动导入相关的两个插件
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //     Components({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //   ]
  //   config.plugins.push(...plugins1)

  // },


  chainWebpack(config) {
    //全局scss的配置
    globalSass(config),

    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }

})


// 排除打包文件
// let externals = {}
// let cdn = { css: [], js: [] }
// const isProduction = process.env.NODE_ENV === 'production' // 判断是否是生产环境
// if (isProduction) {
//   externals = {
//       /**
//       * externals 对象属性解析：
//       * '包名' : '在项目中引入的名字'
//     */
//       'vue': 'Vue',
//       'element-ui': 'ELEMENT',
//       'xlsx': 'XLSX'
//   }
//   // 我手动注入了cdn，所以这里我注释掉了
//   // cdn = {
//   //   css: [],
//   //   js: [
//   //     // vue must at first!
      
//   //     'https://unpkg.com/element-plus@2.2.2/dist/index.full.js'  // element-plus
//   //   ]
//   // }
// }
