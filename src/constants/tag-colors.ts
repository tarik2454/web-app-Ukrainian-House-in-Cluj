const tagColors: {
  [key: string]: { bgClass: string; textClass: string };
} = {
  виставка: { bgClass: 'bg-fuchsia-50', textClass: '!text-fuchsia-700' },
  мистецтво: { bgClass: 'bg-stone-100', textClass: '!text-stone-700' },
  'майстер-клас': { bgClass: 'bg-blue-100', textClass: '!text-blue-700' },
  // малювання: { bgClass: 'bg-teal-100', textClass: '!text-teal-700' },
  освіта: { bgClass: 'bg-orange-100', textClass: '!text-orange-700' },
  спорт: { bgClass: 'bg-gray-100', textClass: '!text-gray-700' },
  малювання: { bgClass: 'bg-violet-100', textClass: '!text-violet-700' },
  юрист: { bgClass: 'bg-red-100', textClass: '!text-red-700' },
  мова: { bgClass: 'bg-pink-100', textClass: '!text-pink-700' },
  психологія: { bgClass: 'bg-green-100', textClass: '!text-green-700' },
  інше: { bgClass: 'bg-cyan-50', textClass: '!text-cyan-800' },
};

export default tagColors;
