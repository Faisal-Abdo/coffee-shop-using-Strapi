import React from 'react'

const trackPageView = async (user) => {

    const response = await fetch(`${config.api}/api/user-activities`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,  // actual API token
          },
          body: JSON.stringify({
            event: 'page view',

            timestamp: new Date().toISOString(),
          })
        });
      
        if (!response.ok) {
          console.error("Failed to log page view");
        }
      };
  


export default trackPageView