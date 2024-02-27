import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Your Calendar</h1><Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      ></Link>
      <EventButton />
    </div>
  );
}

function EventButton() {
  function createEvent() {
    // SQL query to create event
  }
  
  // return <button onClick={createEvent}>Create event)</button>;
  return <button>Create event</button>;
}