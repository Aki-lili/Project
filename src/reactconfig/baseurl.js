/**
 * 全局基本地址定义
 */
global.BASE_URL = '';

switch (process.env.NODE_ENV) {
    case 'development':
        // BASE_URL = 'http://192.168.11.12:9001/'; BASE_URL =
        // 'http://192.168.11.204:9003';
        global.BASE_URL = 'http://192.168.11.204:9005/';
        break;
    case 'production':
        global.BASE_URL = './';
        break;
    default:
        global.BASE_URL = 'http://192.168.11.204:9005/';
}
// 各功能地址
global.API_URL = global.BASE_URL + 'api/';
global.Photo_URL = global.BASE_URL + 'static/file/public/photo/';
global.EXPORT_URL = global.BASE_URL + 'static/file/excel/';