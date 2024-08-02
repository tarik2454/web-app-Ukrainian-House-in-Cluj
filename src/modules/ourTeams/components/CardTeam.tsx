interface CardTeamProps {
  name: string;
  position: string;
  img: string;
  link_telegram: string;
}

export default function CardTeam({
  name,
  position,
  img,
  link_telegram,
}: CardTeamProps) {
  return (
    <div>
      <img src={img} width={'100%'} height={'100%'} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
      <a href={link_telegram} target="_blank" rel="noopener noreferrer">
        Telegram
      </a>
    </div>
  );
}
