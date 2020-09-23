import React from 'react';

import GoogleMap from './GoogleMaps';
import LeafletMap from './LeafletMaps';

// Configs
import config from '../../config';

// Entities / Props
import { Producer } from '../../entities/Producer';
import { Highlighter } from '../../entities/Highlighter';

interface MapsProps {
    producers: Producer[];
    highlighters: Highlighter[];
}

const Maps: React.FC<MapsProps> = ({ producers, highlighters }) => {
    return (
        <div className="uk-container">
            {config.useGoogleMaps === true ? (
                <GoogleMap producers={producers} highlighters={highlighters} />
            ) : (
                <LeafletMap producers={producers} highlighters={highlighters} />
            )}
            ;
        </div>
    );
};

export default Maps;
