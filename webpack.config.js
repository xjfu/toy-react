module.exports = {
    entry:{
        main: './main.js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                        // plugins: 名字，
                        plugins: [[

                            "@babel/plugin-transform-react-jsx", 

                            // 文本替换
                            {
                                pragma: "createElement"
                            }
                        ]]
                        
                    }
                }
        }]
    },

    mode: "development",
    optimization: {
        minimize: false
    },

};
  