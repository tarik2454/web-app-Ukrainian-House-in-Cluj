import eventCardData from '../../shared/data/event-card-data';
import { Section, SectionTitle } from '../../shared/components';

export default function EventId() {
  const { title, description, img, date } = eventCardData;

  return (
    <div className="border-b-[1px] border-gray-300">
      <Section>
        <p className="mb-8 font-inter-600 text-sm font-semibold text-violet-300">
          {date}
        </p>
        <SectionTitle styles={'text-4xl'}>{title}</SectionTitle>
        <img className="w-full h-full mb-6" src={img} alt={title} />
        <div>{description}</div>
      </Section>
    </div>
  );
}
