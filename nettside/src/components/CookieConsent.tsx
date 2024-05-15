"use client";

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleConsent = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // expirs after 1 year
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 right-0 mx-8 lg:mx-28 px-px pb-px rounded-b-lg bg-gradient-to-tr from-cyan-500 via-transparent to-transparent'>
      <div className="bg-gray-950 p-4  rounded-b-lg">
        <p>Vi bruker informasjonskapsler for å forbedre opplevelsen din. Ved å fortsette å besøke dette nettstedet godtar du vår bruk av informasjonskapsler.</p>
        <button className='px-4 py-1 rounded-lg mt-8 w-32 bg-gradient-to-t from-cyan-800 to-cyan-400' onClick={handleConsent}>OK</button>
      </div>
    </div>
  );
};

export default CookieConsent;