import React from 'react';
import EducationAndCertificates from '../components/EducationAndCertificates';
import { certificates, education } from '../data/EducationAndCertificatesData';

const EducationAndCertificatesView = () => {
    return (
        <EducationAndCertificates
            education={education}
            certificates={certificates}
        />
    );
};

export default EducationAndCertificatesView;
