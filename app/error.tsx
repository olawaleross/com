"use client"
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <p>Something went wrong</p>
      <p>Error: {error.message}</p>
      <p>ErrorID: {error.digest}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};
