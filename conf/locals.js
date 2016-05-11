'use strict';

module.exports = {
  //公用全局属性
  public: {
    COMPANY: '蜘蛛旅游网络技术有限公司',
    DESCRIPTION: '深圳市蜘蛛旅游网络技术有限公司成立于2014年，是一家在线旅游互联网技术平台公司，瞄准的是中国酒店行业B2B市场。公司汇集了一大批BAT背景的互联网高级人才。不同于传统的中介分销模式，蜘蛛旅游网旨在利用互联网思维，通过自有平台技术和产品服务，为酒店和酒店产品行业客户（旅行社、会展公司、企业客户等）搭建一个开放、透 明、中立的酒店产品在线直销和交易撮合平台。作为完全中立的第三方，蜘蛛旅游网不介入或影响任何平台交易的达成。我们将专注于通过互联网技术和在线交易机制的创新，帮助解 决传统酒店产品线下交易的种种问题和弊端，提高交易效率、减少交易环节及降低交易成本。蜘蛛旅游网的愿景是成为中国酒店行业第一个B2B在线直销交易平台，真正推进中国酒店行业在线化进程。',
    KEYWORDS: '携程,艺龙,去哪儿,OTA,客房销售,客房管理,酒店管理,酒店推广,酒店采购,酒店预订,三亚预订,客房预订,订房,包房,酒店空房率,协议酒店,公司接待,公司预订,蜘蛛旅游,蜘蛛旅游网,深圳市蜘蛛旅游网络技术有限公司',
    VERSION: '2.0.1.3',
    LAYOUT_NOTICE: '根据国家税务总局关于“营业税改增值税”的相关规定，我司自2016年5月1日起全面停止提供营业税发票。需对4月30日之前业务开具发票的公司，请尽快联系我们完成对账和开票事宜。谢谢合作！',
    HOTEL_GRADE_LABEL: ['不限', '快捷连锁', '二星/经济', '三星/舒适', '四星/高档', '五星/豪华'],
    BREAKFAST_LABEL: ['无早', '单早', '双早', '三早', '四早'],
    GROUP_ORDER_STATUS: ['', '', '邀标中', '邀标成功', '邀标失败'],
    TOKEN_NAME: 'connect.atid',
    debug: false
  },
  //仅开发使用
  development: {
    CONTEXT_PATH: '/zizb/service',
    REST_PATH: '/rest',
    ZIZB_PATH: 'http://localhost:8080/zizb',
    OLD_PATH: '/old',
    BDMAP_PATH: '/bdmap',
    GMAP_PATH: '/gmap'
  },
  //仅测试环境设置
  13: {
    CONTEXT_PATH: '/zizb/service',
    REST_PATH: '/zizb/rest',
    ZIZB_PATH: 'http://192.168.1.13/zizb',
    OLD_PATH: '/zizb',
    BDMAP_PATH: '/zizb/service/bdmap',
    GMAP_PATH: '/zizb/service/gmap'
  },
  16: {
    CONTEXT_PATH: '/zizb/service',
    REST_PATH: '/zizb/rest',
    ZIZB_PATH: 'http://192.168.1.16/zizb',
    OLD_PATH: '/zizb',
    BDMAP_PATH: '/zizb/service/bdmap',
    GMAP_PATH: '/zizb/service/gmap'
  },
  qa: {
    CONTEXT_PATH: '/service',
    REST_PATH: '/rest',
    ZIZB_PATH: 'http://demo.biz.ziztour.net',
    OLD_PATH: '',
    BDMAP_PATH: '/service/bdmap',
    GMAP_PATH: '/service/gmap'
  },
  //仅产品环境使用
  production: {
    CONTEXT_PATH: '/service',
    REST_PATH: '/rest',
    ZIZB_PATH: 'http://biz.ziztour.net',
    OLD_PATH: '',
    BDMAP_PATH: '/service/bdmap',
    GMAP_PATH: '/service/gmap'
  }
};
