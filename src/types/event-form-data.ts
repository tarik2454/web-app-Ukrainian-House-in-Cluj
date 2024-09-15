interface EventFormData {
  title: string;
  description: string;
  eventDate: {
    date: string;
    time: string;
    location: string;
  };
  registration: boolean;
  date: string;
  imageUrl?: string;
  file?: File | null;
  dropdownValue?: string;
}

export default EventFormData;
