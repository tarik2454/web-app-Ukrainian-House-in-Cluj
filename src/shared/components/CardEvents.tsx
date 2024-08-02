interface NewsProps {
  title: string;
  img: string;
  description: string;
  tags: Array<string>;
}

export default function CardEvents({
  title,
  img,
  description,
  tags,
}: NewsProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="flex">
        <img src={img} alt={title} />
        <div>
          <p>{description}</p>
          <ul className="flex gap-2">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
