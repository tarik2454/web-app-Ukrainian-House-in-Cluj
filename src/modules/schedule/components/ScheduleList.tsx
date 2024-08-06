// import { Sponsors } from '../../../shared/components';
import scheduleData from '../../../shared/data/schedule-data';

export default function ScheduleList({ mainPage }: { mainPage?: boolean }) {
  const startWeekDays = scheduleData.slice(0, 2);
  const firstColumnDays = scheduleData.slice(0, 3);
  const secondColumnDays = scheduleData.slice(3);

  return (
    <div className={`grid ${mainPage ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
      <ul className={`grid ${mainPage ? 'grid-cols-2' : 'grid-cols-1'} gap-8`}>
        {(mainPage ? startWeekDays : firstColumnDays).map((day, index) => (
          <li key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 ">
              {day.day} ({day.date})
            </h3>
            <ul className="flex flex-col gap-3">
              {day.events.map((event, idx) => (
                <li key={idx} className="ml-5">
                  <div className="font-inter-600 text-sm font-semibold text-violet-300">
                    {event.time}
                  </div>

                  {event.module && event.description === 'English' ? (
                    <div className="flex">
                      <div className="ml-2">{event.description}</div>
                      <span>&nbsp;/</span>
                      <div className="ml-2 italic">{event.module}</div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="ml-2">{event.description}</div>
                      <div className="ml-2 italic">{event.module}</div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {!mainPage && (
        <ul className="flex flex-col gap-8">
          {secondColumnDays.map((day, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md">
              <h3 className="mb-3 font-inter-600 font-semibold text-lg text-black-200 ">
                {day.day} ({day.date})
              </h3>
              <ul className="flex flex-col gap-3">
                {day.events.map((event, idx) => (
                  <li key={idx} className="ml-5">
                    <div className="font-inter-600 text-sm font-semibold text-violet-300">
                      {event.time}
                    </div>

                    {event.module && event.description === 'English' ? (
                      <div className="flex">
                        <div className="ml-2">{event.description}</div>
                        <span>&nbsp;/</span>
                        <div className="ml-2 italic">{event.module}</div>
                      </div>
                    ) : (
                      <div className="">
                        <div className="ml-2">{event.description}</div>
                        <div className="ml-2 italic">{event.module}</div>
                      </div>
                    )}
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
