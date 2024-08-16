// import { useParams } from 'react-router-dom';

import useModal from '../../shared/hooks/useModal';
import eventPostId from '../../shared/data/event-post-id';

import { Modal, Section, SectionTitle } from '../../shared/components';
import { EventRegisterModal } from './components';

export default function EventId() {
  // const { eventId } = useParams();

  const { title, description, imageUrl, date } = eventPostId;
  const { start, base, end, eventDate, registration } = description;

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

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

      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <p className="mb-6 font-inter-600 text-2xl font-semibold text-black-200 text-center">
          Форма реєстрації
        </p>

        <EventRegisterModal />
      </Modal>
    </div>
  );
}
