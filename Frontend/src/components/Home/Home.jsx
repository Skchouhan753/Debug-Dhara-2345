import React from "react";
import BizClass from "./Home.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import Footer1 from "./Footer/Footer1";

const Home = () => {
  return (
    <>
      <div className={BizClass.Section}>
        <div className={BizClass.Top_Section}>
          <div className={BizClass.Header}>
            <h4>FitBuddy</h4>
            <FaRegUserCircle />
          </div>
          <div className={BizClass.Content}>
            <div className={BizClass.left}>
              <span>#1 nutrition tracking app</span>
              <h2>
                Reach your goals <br /> with MyFitnessPal
              </h2>
              <p>
                {" "}
                Build healthy habits with the all-in-one food, exercise, and
                calorie tracker.
              </p>
              <button>Start Today</button>
            </div>
            <div className={BizClass.Right}>
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-medium.d90d9a03.png&w=828&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={BizClass.Section_Two}>
          <h3>Hit your health goals in 1-2-3</h3>
          <div className={BizClass.Content}>
            <div className={BizClass.Data}>
              {" "}
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-medium.d90d9a03.png&w=828&q=75"
                alt=""
              />
              <div className={BizClass.Content}>
                <h1>
                  Track food, <br /> fitness & fasting
                </h1>
                <span>
                  Tracking calories and macros is easy with our <br /> barcode
                  scanner and device integration.
                </span>
              </div>
            </div>
            <div className={BizClass.Data}>
              <div className={BizClass.Content}>
                <h1>
                  Track food, <br /> fitness & fasting
                </h1>
                <span>
                  Tracking calories and macros is easy with our <br /> barcode
                  scanner and device integration.
                </span>
              </div>{" "}
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-medium.d90d9a03.png&w=828&q=75"
                alt=""
              />
            </div>
            <div className={BizClass.Data}>
              {" "}
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-medium.d90d9a03.png&w=828&q=75"
                alt=""
              />
              <div className={BizClass.Content}>
                <h1>
                  Track food, <br /> fitness & fasting
                </h1>
                <span>
                  Tracking calories and macros is easy with our <br /> barcode
                  scanner and device integration.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={BizClass.Section_Three}>
          <div className={BizClass.Card}></div>
          <div className={BizClass.Card}></div>
          <div className={BizClass.Card}></div>
          <div className={BizClass.Card}></div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Home;
