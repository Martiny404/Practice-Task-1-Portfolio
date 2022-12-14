import react from '../../../../../images/react.webp';
import next from '../../../../../images/nextjs.webp';
import tailwind from '../../../../../images/tailwind.png';
import mongo from '../../../../../images/mongo.png';
import nest from '../../../../../images/nest.png';
import postgres from '../../../../../images/postgres.png';
import node from '../../../../../images/node.png';
import ts from '../../../../../images/ts.png';

export interface ISkill {
	title: string;
	image: string;
	descr: string;
}

export const skills: ISkill[] = [
	{
		title: 'React.JS',
		image: react,
		descr:
			'React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиотек JavaScript, предоставляющих полноценную платформу приложений, React ориентируется исключительно на создание представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и генерируют элементы пользовательского интерфейса.',
	},
	{
		title: 'Next.JS',
		image: next,
		descr:
			'Открытый JavaScript фреймворк, созданный поверх React.js для создания веб-приложений, созданный компанией Vercel. Фреймворк был предназначен для решения проблемы React.js, связанную с отрисовкой приложения на стороне сервера - SSR. Работает на сервере и в браузере.',
	},
	{
		title: 'Tailwind CSS',
		image: tailwind,
		descr:
			'Фреймворк CSS с открытым исходным кодом. Главная особенность этой библиотеки заключается в том, что, в отличие от других фреймворков CSS, таких как Bootstrap, она не предоставляет набор предопределенных классов для таких элементов, как кнопки или таблицы. Вместо этого она создает список "служебных" классов CSS, которые можно использовать для стилизации каждого элемента путем смешивания и сопоставления.',
	},
	{
		title: 'MongoDB',
		image: mongo,
		descr:
			'Документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.',
	},
	{
		title: 'Nest.JS',
		image: nest,
		descr:
			'NestJS - это фреймворк для создания эффективных масштабируемых Node.js серверные приложения, созданные с использованием TypeScript и полностью поддерживающие его.NestJS остается одним из любимых фреймворков JavaScript для большинства backend-разработчиков. Он выводит масштабируемые серверы Node.js на совершенно новый уровень.',
	},
	{
		title: 'PostgreSQL',
		image: postgres,
		descr: 'Свободная объектно-реляционная система управления базами данных.',
	},
	{
		title: 'Node.JS',
		image: node,
		descr:
			'Программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода.',
	},
	{
		title: 'TypeScript',
		image: ts,
		descr:
			'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
	},
];
