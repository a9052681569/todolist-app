const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта"
];

const container = document.querySelector('.list');
const todoForm = document.querySelector('.form');
const itemTemplate = document.querySelector('.item_template');

const getTodoItemEl = (text) => {
	const el = itemTemplate.content.cloneNode(true).children[0];

	const textEl = el.querySelector('.item__text');

	textEl.textContent = text;

	return el;
}

const deleteHandler = (event) => {
	const target = event.target;

	const currListItemEl = target.closest('.list__item')

	currListItemEl.remove();
}
const duplicateHandler = (event) => {
	const target = event.target;
	const currListItemEl = target.closest('.list__item');

	const duplicatedEl = currListItemEl.cloneNode(true);

	setEventListeners(duplicatedEl);

	currListItemEl.after(duplicatedEl);
}

const setEventListeners = (el) => {
	const deleteBtn = el.querySelector('.list__item-btn_delete');

	deleteBtn.addEventListener('click', deleteHandler)

	const duplicateBtn = el.querySelector('.list__item-btn_duplicate');

	duplicateBtn.addEventListener('click', duplicateHandler)
}

const renderItem = (text) => {
	const el = getTodoItemEl(text);

	setEventListeners(el);

	container.prepend(el);
}

items.forEach(renderItem)

todoForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const text = document.querySelector('.form__input').value;

	renderItem(text);
})

