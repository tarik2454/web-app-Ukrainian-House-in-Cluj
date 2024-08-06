interface NewsProps {
  title: string;
  description: string;
  date: string;
}

export default function CardNews({ title, description, date }: NewsProps) {
  return (
    <div>
      <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200">
        {title}
      </h3>
      <p className="mb-3">{description}</p>
      <p className="font-inter-600 text-sm font-semibold text-violet-300">
        {date}
      </p>
    </div>
  );
}
