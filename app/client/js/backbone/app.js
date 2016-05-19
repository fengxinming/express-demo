'use strict';
require('../responsive/app');

var ware = require('./models/ware');
var Wares = require('./collections/wares');
var WaresView = require('./views/wares_view');
var ShoppingCart = require('./views/shopping-cart');
var TotalView = require('./views/total_view');

var wares = new Wares([
	{
		name: '',
		description : '双超（suncao）SC-SB011 多功能仰卧板 家用仰卧起坐健腹肌板 家用运动健身器材',
		imgUrl: '/images/store/565951c3Ncbedcad1.jpg',
		link: '//item.jd.com/2191150.html',
		price: 148.00,
		quantity: 1
	}, {
		name: '',
		description : '丰成（FENC）仰卧板 家用仰卧起坐健腹肌板 多功能健身器材 折叠系列FZ15b',
		imgUrl: '/images/store/55d2c45eN28bdb893.jpg',
		link: '//item.jd.com/1817560.html',
		price: 158.00,
		quantity: 1
	}, {
		name: '',
		description : '米客MIKE 仰卧起坐器脚蹬拉力器健腹器收腹机多功能弹簧男士女士锻炼运动健身器材家用 灰橙色-现货',
		imgUrl: '/images/store/54ace8b0N3523c943.jpg',
		link: '//item.jd.com/1445189938.html',
		price: 59.00,
		quantity: 1
	}, {
		name: '',
		description : '伊吉康雷神家用静音动感单车 室内健身车 JS300780E',
		imgUrl: '/images/store/56c14b55N8491d5f0.jpg',
		link: '//item.jd.com/1680268.html',
		price: 1499.00,
		quantity: 1
	}, {
		name: '',
		description : '凯速静音型双轮健腹器 腹肌轮健腹轮滚轮KA05 绿色（含膝盖垫）',
		imgUrl: '/images/store/56555e3aN561a46aa.jpg',
		link: '//item.jd.com/954924.html',
		price: 39.00,
		quantity: 1
	}, {
		name: '',
		description : '诚悦运动健身组合电镀哑铃15公斤kg礼盒CY-024赠手套护腕连接器',
		imgUrl: '/images/store/57187246Necda1196.jpg',
		link: '//item.jd.com/797248.html',
		price: 199.00,
		quantity: 1
	}
]);
var waresView = new WaresView({ collection: wares });
var cart = new ShoppingCart({ collection: new Wares() });
var total = new TotalView();

waresView.on('addToCart', cart.addItem);

cart.on('render', total.update);