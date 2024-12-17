// components/Landing.tsx
import { useEffect, useState } from 'react';

const Landing = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This runs only in the client-side, after the component mounts
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or you can show a loading spinner or fallback UI
  }

  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      {/* Now you can safely use window inside here */}
    </div>
  );
};

export default Landing;
