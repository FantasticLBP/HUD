(function() {
	loadingWithMessage("正在请求数据");
	setTimeout(function(){
		console.log("模拟请求接口或者耗时操作");
		dismiss();
	},3000);


})();