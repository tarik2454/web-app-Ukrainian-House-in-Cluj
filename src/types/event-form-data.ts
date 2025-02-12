interface EventFormData {
  publicationDate: string;
  title: string;
  img?: string;
  file?: File | null;
  description: string;
  eventDate?:
    | {
        date: string;
        time: string;
        location: string;
      }
    | undefined;
  registration: boolean;
  tags: string;
  favorite?: boolean;
}

export default EventFormData;
