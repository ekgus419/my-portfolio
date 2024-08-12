import React from 'react';
import ToyProject from '../components/ToyProject';
import { ToyProjectInfo } from '../data/ToyProjectData';

const ToyProjectView = () => {
    return <ToyProject ToyProjectInfo={ToyProjectInfo} />;
};

export default ToyProjectView;
