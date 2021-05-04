import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import CountChart from '../components/CountChart';

import TreatChart from '../components/TreatChart'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <CountChart/>
          <TreatChart/>
        </section>
        <section className="bordered section2">
          {/* 治愈情况 */}
          dsds
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};