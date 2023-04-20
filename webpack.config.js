const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                NG_APP_AUTH0_DOMAIN: JSON.stringify(process.env.NG_APP_AUTH0_DOMAIN),
                NG_APP_AUTH0_CLIENT_ID: JSON.stringify(process.env.NG_APP_AUTH0_CLIENT_ID)
            }
        })
    ]
};