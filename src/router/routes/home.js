import React from "react";
import GetStarted from '../../component/sections/getStarted';
import WhyUs from '../../component/sections/whyUs';
import Info from '../../component/sections/info';
import GetStartedCopy from '../../component/sections/getStartedCopy';
import OurClients from '../../component/sections/ourClients'

function HomePageWithoutHeader() {
  return (
      <div className='__KA__home_routes' >
            <GetStarted />
            <WhyUs />
            <Info />
            <OurClients />
            <br />
            <GetStartedCopy />
            <br />
      </div>
  );
}

export default HomePageWithoutHeader;