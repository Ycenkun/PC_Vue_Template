
const path = require('path')
function pathHandler(url){
    return path.join(__dirname,url) //返回一个绝对路径即磁盘路径
}
module.exports={
    // devServer: { //配置反向代理
    //     proxy:{

    //     }
    // },
    chainWebpack:config=>{
        config.resolve.alias
        .set('@',pathHandler('./src'))
        .set('Assets',pathHandler('./src/assets'))
        .set('Components',pathHandler('./src/component'))
        .set('Router',pathHandler('./src/router'))
        .set('Store',pathHandler('./src/store'))
        .set('Views',pathHandler('./src/views'))
        .set('AddData',pathHandler('./src/views/addData'))
        .set('Chart',pathHandler('./src/views/chart'))
        .set('DataManagement',pathHandler('./src/views/dataManagement'))
        .set('Edit',pathHandler('./src/views/edit'))
        .set('Explain',pathHandler('./src/views/explain'))
        .set('Setting',pathHandler('./src/views/setting'))
        .set('Utils',pathHandler('./src/utils'))
        .set('Plugin',pathHandler('./src/plugin'))
        .set('Filter',pathHandler('./src/filter'))
    }
}