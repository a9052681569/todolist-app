const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
	"Сделать фронт для своего проекта",
	"Сделать фронт для своего проекта",
	"Сделать фронт для своего проекта",
];

const container = document.querySelector('.list');

const getTodoItemHtml = (text) => {
	return `
	<li class="list__item">
		<span class="item__text">${text}</span>
		<img
			class="list__item-btn list__item-btn_duplicate"
			src="images/Duplicate.png"
			alt="Копировать"
		/>
		<img class="list__item-btn list__item-btn_delete" src="images/Delete.png" alt="Удалить" />
	</li>
`
}

items.forEach((item) => {
	const elString = getTodoItemHtml(item);

	container.insertAdjacentHTML('afterbegin', elString)
})

