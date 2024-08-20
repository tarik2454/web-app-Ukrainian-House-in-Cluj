interface CardTeamProps {
  name: string;
  position: string;
  img: string;
  link_telegram: string;
}

export default function TeamCard({
  name,
  position,
  img,
  link_telegram,
}: CardTeamProps) {
  return (
    <div>
      <img
        className="mb-8"
        src={img}
        width={'100%'}
        height={'100%'}
        alt={name}
      />
      <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
        {name}
      </h3>
      <p className="mb-3">{position}</p>
      <a href={link_telegram} target="_blank" rel="noopener noreferrer">
        Написати в <span className="text-[#0088cc]">Telegram</span>
      </a>
    </div>
  );
}
