import { useParams } from 'react-router-dom';
import { Section, SectionTitle } from '../../shared/components';
import eventPostId from '../../shared/data/event-post-id';

export default function EventId() {
  const { eventId } = useParams();
  console.log(eventId);
  const { title, description, imageUrl, date } = eventPostId;
  const { start, base, end, eventDate, registration } = description;

  return (
    <div>
      <Section>
        <p className="mb-8 font-inter-600 text-sm font-semibold text-violet-300">
          {date}
        </p>
        <SectionTitle styles={'text-4xl'}>{title}</SectionTitle>
        <img className="w-full h-full mb-6" src={imageUrl} alt={title} />

        <div className="text-lg text-black-200">
          <p className="mb-4">{start.trim()}</p>
          <p className="mb-4">{base.trim()}</p>
          <p className="mb-4">{end.trim()}</p>

          <div className="mb-4">
            <p className="">{eventDate.date}</p>
            <p className="">{eventDate.time}</p>
            <p className="">{eventDate.location}</p>
          </div>

          <p className="mb-4">{registration.trim()}</p>
        </div>
      </Section>
    </div>
  );
}
