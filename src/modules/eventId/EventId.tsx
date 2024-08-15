// import { useParams } from 'react-router-dom';

import useModal from '../../shared/hooks/useModal';
import eventPostId from '../../shared/data/event-post-id';

import {
  FormItem,
  Modal,
  Section,
  SectionTitle,
} from '../../shared/components';

export default function EventId() {
  // const { eventId } = useParams();

  const { title, description, imageUrl, date } = eventPostId;
  const { start, base, end, eventDate, registration } = description;

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('handleSubmit');
  };

  return (
    <div>
      <Section>
        <p className="mb-8 font-inter-600 font-semibold text-sm text-violet-300">
          {date}
        </p>
        <SectionTitle styles={'font-inter-700 font-bold text-4xl'}>
          {title}
        </SectionTitle>
        <img className="w-full h-full mb-6" src={imageUrl} alt={title} />

        <div className="text-lg">
          <p className="mb-3">{start.trim()}</p>
          <p className="mb-3">{base.trim()}</p>
          <p className="mb-3">{end.trim()}</p>

          <div className="mb-3">
            <p>{eventDate.date}</p>
            <p>{eventDate.time}</p>
            <p>{eventDate.location}</p>
          </div>

          <div className="flex gap-2 mb-3">
            <p>{registration.trim()} </p>
            <button
              className="font-inter-600 font-semibold text-violet-300"
              onClick={handleOpenModal}
            >
              Реєстрація
            </button>
          </div>

          <p>Зареєструвані учасники:</p>
        </div>
      </Section>

      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
          <div>
            <h2 className="mb-6 font-inter-700 text-2xl text-center">
              Форма реєстрації
            </h2>

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

              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Відправити
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
