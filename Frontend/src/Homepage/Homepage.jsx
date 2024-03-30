import DailyPlan from "./DailyPlan"
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
    </div>
  );
}

export default Homepage