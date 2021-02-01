(function () {
	if (!document.getElementsByClassName) {
		return;
	}
	if (Mobilebone.support == false) {
		document.querySelector('.page.out').className = 'page';
	}
	var eleVersions = document.getElementsByClassName('version');
	[].slice.call(eleVersions).forEach(function(version) {
		version.innerHTML = '(v' + Mobilebone.VERSION + ')';
	});
	
	getVersion = function (pagein) {
		pagein.querySelector('.version').innerHTML = 'v' + Mobilebone.VERSION;
	};
	
	tabButtonActive = function (pagein, pageout, options) {
		var target = options.target;
		var eleAcive = target && target.parentElement.querySelector('.active');
		if (eleAcive) eleAcive.classList.remove('active');
		if (target) target.classList.add('active');
	};

	// 创建头部
	var eleHeader= document.querySelector('header');

	eleHeader.innerHTML = '<h2 class="logo-h"><a href="index.html" data-rel="auto" class="logo">mobilebone.js<span class="version">'+ Mobilebone.VERSION +'</span></a></h2><nav class="header-nav"><a href="../guide/" class="header-nav-a" data-ajax="false">教程</a><a href="../api/" class="header-nav-a" data-ajax="false">API文档</a><a href="../style/" class="header-nav-a" data-ajax="false" hidden>推荐指南</a><a href="../examples/" class="header-nav-a" data-ajax="false" hidden>示例</a><a href="https://github.com/zhangxinxu/mobilebone" class="header-nav-a header-nav-r" target="_blank">共同建设</a></nav>';

	var pathname = location.pathname;
	if (/\/api\//.test(pathname)) {
		eleHeader.querySelector('a[href*="api"]').classList.add('active');
	} else if (/\/guide\//.test(pathname)) {
		eleHeader.querySelector('a[href*="/guide"]').classList.add('active');
	}

	var aside = document.querySelector("#aside");
	aside.addEventListener('click', function (event) {
		if (!event.target) {
			return;
		}
		if (!event.target.href) {
			this.setAttribute('open', '');
		} else {
			this.removeAttribute('open');
		}
	});

	document.addEventListener('click', function (event) {
		var elePageIn = document.querySelector('.page.in');
		if (elePageIn && elePageIn.contains(event.target)) {
			aside.removeAttribute('open');
		}
	});
})();

// 导航与菜单栏的高亮处理
let eleScriptSmartFor = document.createElement('script');
eleScriptSmartFor.src = 'https://www.zhangxinxu.com/study/202011/smart-for.js';
eleScriptSmartFor.onload = function () {};
document.head.appendChild(eleScriptSmartFor);



