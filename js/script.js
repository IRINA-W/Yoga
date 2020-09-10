//'DOMContentLoaded' - скрипт выполняется после полной загрузки структуры документа
window.addEventListener('DOMContentLoaded', function () {

	'use strict';  //объявление строгого режима
	let tab = document.querySelectorAll('.info-header-tab'),// три класса взяты из HTML документа (.info-header-tab/.info-header/.info-tabcontent)
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');  // два класса, поведение которых прописано в CSS файле (show & hide)
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})

});