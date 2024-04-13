import React from 'react';
import { Helmet } from 'react-helmet-async';

const Metas = ({title, url, description}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
        </Helmet>
    );
};

export default Metas;
