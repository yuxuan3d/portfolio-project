import React, { useEffect, useRef } from 'react';
// You might still want specific CSS for the section's container or title

const Experiments = () => {
  // Use a ref to potentially access the container div if needed later, though not strictly necessary for this script
  const feedContainerRef = useRef(null);
  // Define the specific script source URL from Curator.io
  const curatorScriptSrc = "https://cdn.curator.io/published/42e585e5-9b1c-42fe-b1af-dabdedd0066c.js";

  useEffect(() => {
    // Check if the script has already been added to the page to prevent duplicates
    // You can use a specific ID or check by the src attribute
    const existingScript = document.querySelector(`script[src="${curatorScriptSrc}"]`);

    let script;

    // Only add the script if it doesn't already exist
    if (!existingScript) {
      script = document.createElement('script');
      script.async = true;
      script.charset = 'UTF-8';
      script.src = curatorScriptSrc;
      // Append the script to the body or head
      document.body.appendChild(script);
    }

    // --- Cleanup function ---
    // This function will run when the component unmounts
    return () => {
      // If we added the script in this effect instance, remove it
      if (script && document.body.contains(script)) {
         document.body.removeChild(script);
      }
      // Optional but recommended: Clean up anything the Curator script might have added
      // inside the placeholder div when the component unmounts.
      // This helps prevent potential conflicts if the component re-mounts.
      if (feedContainerRef.current) {
        // Check if Curator provides a specific cleanup function (unlikely but possible)
        // Otherwise, just clear the content React didn't create.
        // Be cautious if other effects modify this div.
        // feedContainerRef.current.innerHTML = '<a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>';
        // Clearing completely might be safer if Curator adds complex elements:
        feedContainerRef.current.innerHTML = '';
        // Re-adding the logo might be required by ToS, check Curator's docs.
        // If needed, add it back safely:
        const logoLink = document.createElement('a');
        logoLink.href = "https://curator.io";
        logoLink.target = "_blank";
        logoLink.className = "crt-logo crt-tag";
        logoLink.textContent = "Powered by Curator.io";
        if(feedContainerRef.current) { // Check again in case it became null
            feedContainerRef.current.appendChild(logoLink);
        }
      }
    };
    // Empty dependency array ensures this effect runs only once after mount
  }, []); // <-- Run only once after initial render

  return (
    <section id="experiments">
      <div className="container">
        <h2>My Experiments</h2>

        {/* The placeholder div from Curator.io */}
        {/* Assign the ref to this div */}
        <div id="curator-feed-default-feed-layout" ref={feedContainerRef}>
          {/* Keep the required anchor tag for Curator.io branding */}
          <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>

        {/* You can keep the link to your profile if you like */}
         <p style={{textAlign: 'center', marginTop: '30px'}}>
            <a href="https://www.instagram.com/yxperiments/" target="_blank" rel="noopener noreferrer" style={{fontWeight: 'bold'}}>Follow me on Instagram</a>
        </p>

      </div>
    </section>
  );
};

export default Experiments;