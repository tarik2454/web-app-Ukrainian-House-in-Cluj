interface NewsProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  mainPage?: boolean;
}

export default function NewsCard({
  title,
  description,
  date,
  image,
  mainPage,
}: NewsProps) {
  return (
    <div className="">
      {!mainPage && (
        <p className="mb-2 font-inter-600 text-sm font-semibold text-violet-300">
          {date}
        </p>
      )}
      <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200">
        {title}
      </h3>

      <div className="">
        <div className="mr-6">
          {mainPage && !image && null}
          {mainPage && image && (
            <img
              className="w-[200px] h-[120px] float-left mr-6"
              src={image}
              alt={title}
            />
          )}
          {!mainPage && image && (
            <img
              className="w-[320px] h-[200px] float-left mr-6"
              src={image}
              alt={title}
            />
          )}
        </div>

        <>
          {mainPage && (
            <p className="mb-2 font-inter-600 text-sm font-semibold text-violet-300">
              {date}
            </p>
          )}
          <p>{description}</p>
        </>
      </div>
    </div>
  );
}
