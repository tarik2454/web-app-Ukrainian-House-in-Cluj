import { FormItem } from '../../../shared/components';

export default function EventRegisterModal() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormItem
        labelText={`Ваше ім'я`}
        type={'text'}
        id={'firstName'}
        name={'firstName'}
      />
      <FormItem
        labelText={'Ваш email'}
        type={'email'}
        id={'email'}
        name={'email'}
      />
      <FormItem
        labelText={'Ваш email'}
        type={'email'}
        id={'email'}
        name={'email'}
      />

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="w-fit bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-250"
        >
          Відправити
        </button>
      </div>
    </form>
  );
}
