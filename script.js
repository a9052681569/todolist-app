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

const renderItem = (text) => {
	const el = getTodoItemEl(text);

	container.append(el)
}

items.forEach(renderItem)

todoForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const text = document.querySelector('.form__input').value;

	renderItem(text);
})

