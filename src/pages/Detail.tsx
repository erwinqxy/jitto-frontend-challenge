import React from "react";
import Collapsible from "../components/collapsible";

const Detail: React.FC = () => {
  return (
    <div className="detail-container">
      <Collapsible open title="About me">
        Hellooo! My name is Erwin. I’m a Year 3 Computer Science student at National University Singapore. I will be
        specializing in software development and database systems. I am also curious to
        learn more about Algorithms. Currently, I’m a Mobile Developer Intern at Endowus.
      </Collapsible>
      <Collapsible open title="Personal site">
      <a href="https://erwinqxyv2.vercel.app/">Personal site here</a> 
      </Collapsible>
      <Collapsible open title="Dummy Text">
        Consectetur adipiscing elit pellentesque habitant morbi tristique. Pulvinar
        pellentesque habitant morbi tristique. Vel quam elementum pulvinar etiam. Pulvinar
        pellentesque habitant morbi tristique senectus et netus et. Elementum integer enim
        neque volutpat. Faucibus in ornare quam viverra orci sagittis. Amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Dui accumsan sit amet nulla.
        Proin sagittis nisl rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio
        ut sem nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
        auctor augue
      </Collapsible>
    </div>
  );
};

export default Detail;
