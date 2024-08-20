export interface EventsDataProps {
  id: string;
  title: string;
  img: string;
  description: string;
  tags: Array<string>;
  date: string;
}

export interface EventsListProps {
  eventsData?: EventsDataProps[];
  mainPage?: boolean;
}
