import { useParams } from 'react-router-dom';

export default function EventDetails() {
  const { eventId } = useParams();

  return <div>Details for Event ID: {eventId}</div>;
}
