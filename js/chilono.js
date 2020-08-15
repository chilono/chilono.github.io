// 重写文章界面的图片链接功能
function recomposeConnectImg() {
	var img1 = $(".content img");
	var tit = $(".title")[0].innerText;
	console.log(tit);
	img1.each(function(){
		arr = $(this).attr("src").split("/").pop();
		$(this).attr("src", "../" + tit + "/" + arr);
	});
	console.log(img1.src);
}