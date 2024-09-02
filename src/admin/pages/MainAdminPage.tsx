import PageTitle from '../../shared/components/PageTitle';

export default function MainAdminPage() {
  return (
    <>
      <PageTitle
        styles={
          'font-inherit text-normal font-normal tracking-tight text-gray-900 pb-2 border-b-[1px] border-gray-300'
        }
      >
        Головна
      </PageTitle>

      <ul className="">
        <li>
          Якщо ви хочете додати пробіл між рядками або абзацами використовуйте
          {' <p class="space"></p>'}
        </li>
        <li>
          Якщо ви хочете виділити текс жирним шрифтом обгорніть його в
          {' <span class="strong">Тут буже жирний шрифт</span>'}
        </li>
      </ul>
    </>
  );
}
