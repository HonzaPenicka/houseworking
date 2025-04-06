import { useEffect } from 'react';

const Redirect = () => {
  useEffect(() => {
    window.location.replace('https://www.yourbob.cz');
  }, []);

  return null; // Nebo zobrazení např. "Přesměrovávám..."
};

export default Redirect;