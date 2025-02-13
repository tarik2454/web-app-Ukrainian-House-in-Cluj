export interface EventDataProps {
  publicationDate: string;
  title: string;
  img?: string;
  file?: File | null;
  description: string;
  eventDate: {
    date?: string;
    time?: string;
    location?: string;
  };
  registration: boolean;
  tags: string;
  favorite?: boolean;
}

export interface EventsListProps {
  eventsData?: EventDataProps[];
  mainPage?: boolean;
}
