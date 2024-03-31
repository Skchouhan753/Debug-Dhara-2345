import DailyPlan from "./DailyPlan"
import HomepageFoter from "./HomepageFoter"
import Network from "./Network"
import OurPhilosophy from "./OurPhilospy"
import QA from "./QA"
import TalkWithExpert from "./TalkWithExpert"

function Homepage() {
  return (
    <div>
      <DailyPlan />
      <OurPhilosophy />
      <Network />
      <QA />
      <TalkWithExpert />
      <HomepageFoter/>
    </div>
  );
}

export default Homepage