import React from 'react';
import Filterlink from '../containers/FilterLink';

const Footer = () => (
    <p>
        Show:
        {" "}
        <Filterlink filter="SHOW_ALL">
            All
        </Filterlink>
        {", "}
        <Filterlink filter="SHOW_ACTIVE">
            Active
        </Filterlink>
        {", "}
        <Filterlink filter="SHOW_COMPLETED">
            Completed
        </Filterlink>
    </p>
);

export default Footer;
