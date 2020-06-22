module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api/keve": {
          target: "http://3g.163.com/touch/nc/api/video/recommend/Video_Recom/0-10.do?callback=videoList", // /git/search/repositories?q=vue&sort=stars&order=desc 
          changeOrigin: true,
          pathRewrite: { "^/api/keve": "" }
        },
        '/api/topnews': {
          target: 'http://c.m.163.com/nc/article/headline/T1348647853363/3-40.html',
          changeOrigin: true,
          pathRewrite: { "^/api/topnews": "" }
        },
        '/api/hotnews': {
          target: 'http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html',
          changeOrigin: true,
          pathRewrite: { '^/api/hotnews': '' }
        },
        '/api/imgacg': {
          target: 'https://img.xjh.me/random_img.php?return=json',
          changeOrigin: true,
          pathRewrite: { '^/api/imgacg': '' }
        }
      }
    },
  }
}
