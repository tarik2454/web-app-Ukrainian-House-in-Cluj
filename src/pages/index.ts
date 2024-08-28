import { lazy } from 'react';

export const Home = lazy(() => import('./HomePage'));
export const News = lazy(() => import('./NewsPage'));
export const Events = lazy(() => import('./EventsPage'));
export const AboutUs = lazy(() => import('./AboutUs'));
export const WorkSchedule = lazy(() => import('./WorkSchedule'));
export const EventDetails = lazy(() => import('./EventDetails'));
