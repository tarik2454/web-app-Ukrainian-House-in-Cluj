import scheduleData from '../../../shared/data/schedule-data';

export default function ScheduleList({ mainPage }: { mainPage?: boolean }) {
  const startWeekDays = scheduleData.slice(0, 2);
  const firstColumnDays = scheduleData.slice(0, 3);
  const secondColumnDays = scheduleData.slice(3);

  return (
    <div className={`grid ${mainPage ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
      <ul
        className={`${mainPage ? 'grid grid-cols-2' : 'flex flex-col'} gap-8`}
      >
        {(mainPage ? startWeekDays : firstColumnDays).map((day, index) => (
          <li
            key={index}
            className="p-6 bg-blue-100 dark:bg-dark-schedule-background"
          >
            <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
              {day.day} ({day.date})
            </h3>
            <ul className="flex flex-col gap-3">
              {day.events.map((event, idx) => (
                <li key={idx} className="ml-5">
                  <div
                    className="font-inter-600 text-sm font-semibold text-violet-300 
                  dark:text-dark-date"
                  >
                    {event.time}
                  </div>

                  <div className="">
                    <div className="ml-2">{event.description}</div>
                    <div className="ml-2 italic">{event.level}</div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {!mainPage && (
        <ul className="flex flex-col gap-8">
          {secondColumnDays.map((day, index) => (
            <li
              key={index}
              className="p-6 bg-blue-100 dark:bg-dark-schedule-background"
            >
              <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 dark:text-dark-title">
                {day.day} ({day.date})
              </h3>
              <ul className="flex flex-col gap-3">
                {day.events.map((event, idx) => (
                  <li key={idx} className="ml-5">
                    <div
                      className="font-inter-600 text-sm font-semibold text-violet-300 
                    dark:text-dark-date"
                    >
                      {event.time}
                    </div>

                    <div className="">
                      <div className="ml-2">{event.description}</div>
                      <div className="ml-2 italic">{event.level}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
