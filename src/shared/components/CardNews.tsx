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
      <p className="mb-3 ">{description}</p>
      <p>{date}</p>
    </div>
  );
}
