import Data from "../../data/data.json";
import ReasonsItem from "./ReasonsItem";

import IconBanking from "../../assets/icons/icon-online.svg";
import IconBudgeting from "../../assets/icons/icon-budgeting.svg";
import IconOnboarding from "../../assets/icons/icon-onboarding.svg";
import IconOpen from "../../assets/icons/icon-api.svg";

const Icons = [IconBanking, IconBudgeting, IconOnboarding, IconOpen];

const items = Data.reasons.items.map((e, index) => {
  return (
    <div>
      <img src={Icons[index]} alt="Icons" className="mx-auto mb-8 lg:mx-0 lg:mb-4 " />
      <ReasonsItem title={e.title} description={e.description}></ReasonsItem>
    </div>
  );
});

const Reasons = () => {
  return (
    <div className="p-6 text-center lg:text-left lg:px-24 lg:py-24 bg-VeryLightGray">
      <div className="mb-20 max-w-lg">
        <h2 className="text-2xl lg:text-4xl text-DarkBlue mb-5">{Data.reasons.title}</h2>
        <p className="text-base text-GrayishBlue">{Data.reasons.description}</p>
      </div>
      <div className="grid lg:grid-flow-col lg:gap-5">{items}</div>
    </div>
  );
};

export default Reasons;
