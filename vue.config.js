module.exports = {  
  devServer: {    
    // compress: true,
    port: 9000,
    // proxy: 'http://m-flashcards-api-stage.herokuapp.com/',
    proxy: {
      '^/api': {
        target: 'http://m-flashcards-api-stage.herokuapp.com/',
        ws: true,
        changeOrigin: true
      },    
    },
  }
}