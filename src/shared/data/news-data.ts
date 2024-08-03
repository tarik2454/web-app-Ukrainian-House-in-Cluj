const newsData = [
  {
    title: 'Великий прорив у медицині',
    description:
      'Вчені оголосили про створення нової вакцини від малярії, яка показала 95% ефективності в клінічних випробуваннях.',
    date: '01.01.2024',
  },
  {
    title: 'Економічний форум у Давосі',
    description:
      'Світові лідери зібралися для обговорення глобальних викликів та економічних перспектив на майбутній рік.',
    date: '02.01.2024',
  },
  {
    title: 'Новий смартфон від TechCorp',
    description:
      'TechCorp презентувала свій новий флагманський смартфон з революційними функціями та дизайном.',
    date: '03.01.2024',
  },
  {
    title: 'Зміни в системі освіти',
    description:
      'Міністерство освіти анонсувало впровадження нових навчальних програм, які будуть орієнтовані на розвиток цифрових навичок у школярів.',
    date: '04.01.2024',
  },
  {
    title: 'Міжнародний кінофестиваль',
    description:
      'На кінофестивалі в Каннах головний приз отримав український режисер за фільм про соціальні проблеми.',
    date: '05.01.2024',
  },
  {
    title: 'Технологічна виставка',
    description:
      'На щорічній технологічній виставці представили нові розробки в галузі штучного інтелекту та робототехніки.',
    date: '06.01.2024',
  },
  {
    title: 'Збільшення мінімальної зарплати',
    description:
      'Уряд оголосив про підвищення мінімальної заробітної плати на 10%, що вплине на мільйони працівників.',
    date: '07.01.2024',
  },
  {
    title: 'Космічні досягнення',
    description:
      'Приватна космічна компанія успішно запустила ракету на Марс з новим дослідницьким обладнанням.',
    date: '08.01.2024',
  },
  {
    title: 'Рекордний снігопад',
    description:
      'Снігопад, який пройшов у минулі вихідні, став рекордним за останні 30 років, призвівши до заторів та зупинки транспорту.',
    date: '09.01.2024',
  },
  {
    title: 'Нові заходи безпеки',
    description:
      'У місті вводяться нові заходи безпеки для запобігання терористичним актам, включаючи підвищену охорону на транспорті.',
    date: '10.01.2024',
  },
  {
    title: 'Відновлення старовинного замку',
    description:
      'Завершилася реставрація одного з найстаріших замків країни, який тепер відкритий для відвідувачів.',
    date: '11.01.2024',
  },
  {
    title: 'Спортивні досягнення',
    description:
      'Національна збірна з футболу здобула перемогу в міжнародному турнірі, обігравши команду-суперника з рахунком 3:1.',
    date: '12.01.2024',
  },
  {
    title: 'Концерт світової зірки',
    description:
      'Відомий музикант дав грандіозний концерт у столиці, зібравши понад 50 тисяч шанувальників.',
    date: '13.01.2024',
  },
  {
    title: 'Новий парк відкрито',
    description:
      'У місті відкрили новий парк з сучасними атракціонами та зонами відпочинку для дітей та дорослих.',
    date: '14.01.2024',
  },
  {
    title: 'Екологічна акція',
    description:
      'Волонтери зібрали понад 5 тонн сміття під час масштабної акції з прибирання узбережжя.',
    date: '15.01.2024',
  },
  {
    title: 'Транспортна реформа',
    description:
      'У місті планують впровадити нову систему громадського транспорту для зменшення заторів та покращення екології.',
    date: '16.01.2024',
  },
  {
    title: 'Виставка сучасного мистецтва',
    description:
      'У головному музеї міста відкрилася виставка сучасного мистецтва, де представлені роботи молодих художників.',
    date: '17.01.2024',
  },
  {
    title: 'Науковий прорив у генетиці',
    description:
      'Вчені досягли значного прогресу у вивченні генома людини, що може призвести до нових методів лікування хвороб.',
    date: '18.01.2024',
  },
  {
    title: 'Розробка нової гри',
    description:
      'Відома компанія анонсувала вихід нової відеогри, яка вже отримала високі оцінки від критиків.',
    date: '19.01.2024',
  },
  {
    title: 'Захист прав тварин',
    description:
      'Активісти провели мітинг на підтримку нових законів про захист тварин від жорстокого поводження.',
    date: '20.01.2024',
  },
  {
    title: 'Запуск нового проекту',
    description:
      'Компанія GreenTech оголосила про запуск проекту з виробництва екологічно чистої енергії.',
    date: '21.01.2024',
  },
  {
    title: 'Фестиваль народної музики',
    description:
      'На щорічному фестивалі народної музики виступили кращі виконавці з усього світу.',
    date: '22.01.2024',
  },
  {
    title: 'Інновації в медицині',
    description:
      'Впровадження нових технологій у медичну сферу дозволило значно покращити якість лікування пацієнтів.',
    date: '23.01.2024',
  },
  {
    title: 'Конференція з питань клімату',
    description:
      'Екологи та науковці зібралися для обговорення шляхів боротьби з глобальним потеплінням.',
    date: '24.01.2024',
  },
  {
    title: 'Відкриття нового ТРЦ',
    description:
      'У центрі міста відкрився новий торгово-розважальний центр з численними магазинами та розвагами.',
    date: '25.01.2024',
  },
  {
    title: 'Підвищення цін на пальне',
    description:
      'Ціни на бензин та дизельне пальне зросли на 5% через нові податкові зміни.',
    date: '26.01.2024',
  },
  {
    title: 'Запуск супутника',
    description:
      'Космічне агентство успішно вивело на орбіту новий супутник для дослідження кліматичних змін.',
    date: '27.01.2024',
  },
  {
    title: 'Науковий симпозіум',
    description:
      'Університет провів симпозіум, де вчені представили свої останні дослідження у галузі біотехнологій.',
    date: '28.01.2024',
  },
  {
    title: 'Театральна прем’єра',
    description:
      'У міському театрі відбулася прем’єра нової вистави за участі відомих акторів.',
    date: '29.01.2024',
  },
  {
    title: 'Новий спортивний комплекс',
    description:
      'У місті відкрився новий спортивний комплекс з сучасними тренажерами та басейном.',
    date: '30.01.2024',
  },
  {
    title: 'Міжнародна виставка IT',
    description:
      'На міжнародній виставці IT компанії представили нові програмні рішення та гаджети.',
    date: '31.01.2024',
  },
];

export default newsData;
