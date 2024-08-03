export interface EventsDataProps {
  title: string;
  img: string;
  description: string;
  tags: Array<string>;
  date: string;
}

export interface EventsListProps {
  eventsData: EventsDataProps[];
  indexStart?: number;
  indexEnd?: number;
  singleEvent?: boolean;
  listEvents?: boolean;
  pageEvents?: boolean;
}
