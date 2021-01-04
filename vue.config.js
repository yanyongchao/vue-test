const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  configureWebpack: () => {
    const productionPlugins = []
    if (process.env.NODE_ENV === 'production') {
      productionPlugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/about'], // 需要预渲染的路由
          renderer: new Renderer({
            // headless: false, // 打包渲染时是否显示浏览器窗口，调试时有用
            renderAfterDocumentEvent: 'render-event' // 等待触发目标时间后，开始预渲染
          })
        })
      )
    }
    return {
      plugins: productionPlugins
    }
  },
  devServer: {
    port: 8088, // 配置端口
    open: true // 自动开启浏览器
  }
}
