interface NewsProps {
  title: string;
  description: string;
}

export default function CardNews({ title, description }: NewsProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
