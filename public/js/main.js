const menuBtn = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-burger');
const hamburgerText = document.querySelector('.menu-burger-text');
const nav = document.querySelector('.nav');
const backToTop = document.getElementById('backToTop');
const menuNavLinks = document.querySelectorAll('.menu-nav-link');
const keyVisual = document.querySelector('.key-visual');
const kvIcon = document.querySelector('.kv-icon');
const kvTitle = document.querySelector('.kv-title');
const kvDesc = document.querySelector('.kv-desc');
const article = document.querySelectorAll('.article');
const articlesWrapper = document.querySelector('.articles-list');
const relatedArticlesWrapper = document.querySelector('.related-articles');
const relatedArticle = document.querySelectorAll('.related-article');


let showMenu = false;
hamburgerText.innerHTML = 'Menu';

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        
        hamburgerText.innerHTML = 'Close';
        
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
       
        hamburgerText.innerHTML = 'Menu';

        showMenu = false;
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 20) {
        $('#backToTop').fadeIn(400);
    } else {
        $('#backToTop').fadeOut(400);
    }
});

$('#backToTop').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
});

$('.tag-list-link').click(function() {
	let getElem = $(this).attr('href');
	let targetDistance = 110;
	if ($(getElem).length) {
		let getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});

$('.ftr-terms').click(function() {
	let getElem = $(this).attr('href');
	let targetDistance = 80;
	if ($(getElem).length) {
		let getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});


[relatedArticle].filter(eachRelated => {
	if (eachRelated.length === 1) {
		relatedArticlesWrapper.classList.add('col-1');
	}
});


//keyvisual category object
const categoryKV = {
	'post': {
		bg: 'url(/public/media/images/post-kv-bg.png) repeat',
		img: '/public/media/images/post-kv-icon.png',
		title: 'みんなの投稿',
		desc: 'みなさんからのキッチンに関する投稿を大公開！各ご家庭でクリナップのキッチンがどのように活用されているかを覗いてみましょう。'
	},
	'event': {
		bg: 'url(/public/media/images/event-kv-bg.png) repeat',
		img: '/public/media/images/event-kv-icon.png',
		title: 'イベント',
		desc: '収納術や季節のお料理教室など、クリナップのキッチンを使いこなすためのイベントを開催しています。'
	},
	'kitchen': {
		bg: 'url(/public/media/images/kitchen-kv-bg.png) repeat',
		img: '/public/media/images/kitchen-kv-icon.png',
		title: 'くらし・料理',
		desc: '季節やライフスタイルに合わせたキッチンの楽しみ方に関する情報をお届けします。'
	},
	'care': {
		bg: 'url(/public/media/images/care-kv-bg.png) repeat',
		img: '/public/media/images/care-kv-icon.png',
		title: 'お手入れ・つかい方',
		desc: 'お手入れについてのお困りごとを解決する情報をお届けします。'
	},
	'storage': {
		bg: 'url(/public/media/images/storage-kv-bg.png) repeat',
		img: '/public/media/images/storage-kv-icon.png',
		title: '収納アイデア',
		desc: 'キッチンライフがより楽しくなる！収納アイデアをご紹介します。'
	},
	'movie': {
		bg: 'url(/public/media/images/movie-kv-bg.png) repeat',
		img: '/public/media/images/movie-kv-icon.png',
		title: '動画でみる',
		desc: 'お手入れやイベントレポートなどの動画はこちらでご覧いただけます。'
	}
};

//default key visual
keyVisual.style.background = categoryKV['post'].bg;
keyVisual.style.backgroundSize = 'cover';
keyVisual.style.backgroundPosition = 'bottom, top';
kvIcon.src = categoryKV['post'].img;
kvTitle.innerHTML = categoryKV['post'].title;
kvDesc.innerHTML = categoryKV['post'].desc;


const handleClick = (e) => {
    menuNavLinks.forEach(menuLinks => {
        menuLinks.classList.remove('active');
    });
    e.target.closest('.menu-nav-link').classList.add('active');
};

const handleKeyVisual = (e) => {
    let category = e.target.closest('a').dataset.category;
    
	keyVisual.style.background = categoryKV[`${category}`].bg;
	keyVisual.style.backgroundSize = 'cover';
	keyVisual.style.backgroundPosition = 'bottom, top';
    kvIcon.src = categoryKV[`${category}`].img;
    kvTitle.innerHTML = categoryKV[`${category}`].title;
    kvDesc.innerHTML = categoryKV[`${category}`].desc;
};

const toggleNav = (e) => {
	nav.classList.remove('open');
	hamburger.classList.remove('open');
	hamburgerText.innerHTML = 'Menu';
	showMenu = false;
};

menuNavLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', handleClick);
	menuLinks.addEventListener('click', handleKeyVisual);
	menuLinks.addEventListener('click', toggleNav);
});


[articlesWrapper].filter(eachArticleList => {
	[eachArticleList].filter(articleList => {
		if (articleList.length === 1) {
		[article].filter(eachArticle => {
			if ((eachArticle.length < 4) || ((eachArticle.length % 4) != 0)) {
				document.querySelector('.articles-list').classList.add('flex-start'); 
			}
		});
		} else {
		[article].filter(eachArticle => {
			if ((eachArticle.length < 4) || ((eachArticle.length % 4) != 0)) {
			document.querySelectorAll('.articles-list').forEach(perDiv => {
				perDiv.classList.add('flex-start');
			});
			}
		});

		}
	});
});
