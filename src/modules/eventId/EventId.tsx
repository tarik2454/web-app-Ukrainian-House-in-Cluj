// import { useParams } from 'react-router-dom';

import useModal from '../../shared/hooks/useModal';
import eventPostId from '../../shared/data/event-post-id';

import { SpriteSVG } from '../../img/SpriteSVG';
import Section from '../../shared/components/Section';
import SectionTitle from '../../shared/components/SectionTitle';
import Modal from '../../shared/components/Modal';
import EventRegisterModal from './components/EventRegisterModal';

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
        <img className="w-full h-full mb-5" src={imageUrl} alt={title} />

        <div className="text-lg">
          <p className="mb-3">{start.trim()}</p>
          <p className="mb-3">{base.trim()}</p>
          <p className="mb-6">{end.trim()}</p>

          <div className="mb-6">
            <div className="flex items-center gap-[7px]">
              <SpriteSVG name={'alarm'} width={'22'} height={'22'} />
              <p>{eventDate.date}</p>
            </div>
            <div className="flex items-center gap-[9px]">
              <SpriteSVG name={'clock'} width={'20'} height={'20'} />
              <p>{eventDate.time}</p>
            </div>
            <div className="flex items-center gap-[8px] -ml-[1px]">
              <SpriteSVG name={'location'} width={'23'} height={'22'} />
              <p>{eventDate.location}</p>
            </div>
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

      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        modalTitle={'Форма реєстрації'}
      >
        <EventRegisterModal />
      </Modal>
    </div>
  );
}
