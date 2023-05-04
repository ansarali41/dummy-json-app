import React from 'react';

function GoogleMap({ lat, lng }) {
    const iframeUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik`;

    return (
        <div>
            <iframe title="Map" width="400" height="350" frameborder="0" style={{ border: 0 }} src={iframeUrl} allowfullscreen></iframe>
        </div>
    );
}

export default GoogleMap;
