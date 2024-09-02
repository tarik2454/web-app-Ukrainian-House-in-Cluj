import { useEffect } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import PageTitle from '../../shared/components/PageTitle';
import Button from '../../shared/components/Button';
import AdminFormItem from '../components/AdminFormItem';
import scheduleData from '../../shared/data/schedule-data';

interface EventData {
  time: string;
  description: string;
  moreInfo?: string;
}

export interface WorkScheduleFormData {
  day: string;
  date: string;
  events: EventData[];
}

export default function CreateWorkSchedule() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<{ schedules: WorkScheduleFormData[] }>({
    defaultValues: {
      schedules: scheduleData,
    },
  });

  const { fields } = useFieldArray({
    control,
    name: 'schedules',
  });

  const onSubmit: SubmitHandler<{
    schedules: WorkScheduleFormData[];
  }> = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <PageTitle
        styles={
          'font-inherit text-normal font-normal tracking-tight text-gray-900 pb-2 border-b-[1px] border-gray-300'
        }
      >
        Створити графік
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8 mb-8">
          {fields.map((schedule, scheduleIndex) => (
            <div key={schedule.id}>
              <div className="mb-3">
                <AdminFormItem
                  labelText={'День'}
                  type={'text'}
                  id={`schedules.${scheduleIndex}.day`}
                  name={`schedules.${scheduleIndex}.day`}
                  register={register}
                  error={errors?.schedules?.[scheduleIndex]?.day}
                  validation={{ required: 'Поле обов’язкове для заповнення' }}
                  stylesField={'bg-blue-100'}
                />
                {/* <AdminFormItem
                  labelText={'Дата'}
                  type={'date'}
                  id={`schedules.${scheduleIndex}.date`}
                  name={`schedules.${scheduleIndex}.date`}
                  register={register}
                  error={errors?.schedules?.[scheduleIndex]?.date}
                  validation={{ required: 'Поле обов’язкове для заповнення' }}
                /> */}
              </div>

              {schedule.events.map((_, eventIndex) => {
                return (
                  <div
                    key={eventIndex}
                    className="grid grid-cols-[_0.7fr,_2fr,_1fr] mb-4 last:mb-0"
                  >
                    <AdminFormItem
                      labelText={`${eventIndex === 0 ? 'Час події' : ''}`}
                      type={'text'}
                      id={`schedules.${scheduleIndex}.events.${eventIndex}.time`}
                      name={`schedules.${scheduleIndex}.events.${eventIndex}.time`}
                      register={register}
                      error={
                        errors?.schedules?.[scheduleIndex]?.events?.[eventIndex]
                          ?.time
                      }
                      stylesLabel={'text-center'}
                      stylesField={'border-r-0'}
                    />
                    <AdminFormItem
                      labelText={`${eventIndex === 0 ? 'Опис події' : ''}`}
                      type={'textarea'}
                      id={`schedules.${scheduleIndex}.events.${eventIndex}.description`}
                      name={`schedules.${scheduleIndex}.events.${eventIndex}.description`}
                      register={register}
                      error={
                        errors?.schedules?.[scheduleIndex]?.events?.[eventIndex]
                          ?.description
                      }
                      stylesLabel={'text-center'}
                      stylesField={''}
                    />
                    <AdminFormItem
                      labelText={`${eventIndex === 0 ? 'Дод.інформація' : ''}`}
                      type={'text'}
                      id={`schedules.${scheduleIndex}.events.${eventIndex}.moreInfo`}
                      name={`schedules.${scheduleIndex}.events.${eventIndex}.moreInfo`}
                      register={register}
                      stylesLabel={'text-center'}
                      stylesField={'border-l-0'}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            type={'submit'}
            styles={
              'px-4 py-2 bg-gray-800  text-gray-300 rounded hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white'
            }
          >
            Опублікувати
          </Button>
        </div>
      </form>
    </>
  );
}
