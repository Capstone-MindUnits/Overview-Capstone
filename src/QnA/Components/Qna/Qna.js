import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import moment from "moment";

function Qna(props) {
  return (
    <div className=" overflow-y-auto" style={{ height: "550px" }}>
      {props.data.results &&
        props.data.results
          .sort((a, b) => {
            return b.helpfulness - a.helpfulness;
          })
          .slice(0, props.initialCount)
          .map((e, key) => {
            return (
              <div className="question  mt-3" key={key}>
                <div className="w-2/3" style={{ height: "260px" }} >
                  <p className=" font-sans font-bold text-base text-gray-600">
                    Q: {e.question_body}
                  </p>
                  <div className="answer mt-2 flex">
                    <p className="font-sans font-bold text-base text-gray-600">
                      A:
                    </p>
                    <div>
                      {Object.values(e.answers)
                        .slice(0, 2)
                        .sort((a, b) => {
                          return b.helpfulness - a.helpfulness;
                        })
                        .map((a, key) => {
                          return (
                            <div key={key}>
                              <p className="font-sans font-ms ml-2 mt-1 text-gray-600 text-xs">
                                {a.body}
                              </p>
                              <div className="details mt-2 flex">
                                <p className="font-sans font-ms ml-2 text-gray-400 ">
                                  by {a.answerer_name} ,
                                  {moment(a.date).format("LL")}
                                </p>
                                <p className=" ml-4 mr-4 text-gray-600">|</p>
                                <p className=" mr-4 text-gray-600">
                                  Helpful?
                                  <a href="#" className="underline ml-2 mr-1 ">
                                    Yes
                                  </a>
                                  ({a.helpfulness})
                                </p>
                                <p className=" mr-4 text-gray-600">|</p>
                                <p>
                                  <a
                                    href="#"
                                    className="underline text-gray-600 "
                                  >
                                    Report
                                  </a>
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      <div>
                        <p className="font-sans font-ms ml-2 mt-2 text-gray-600 text-xs">
                          Yes, as you can see in these photos.
                        </p>
                        <div className="photos flex">
                          <Popup
                            trigger={
                              <div className="box-border mt-3 ml-2 h-12 w-20 p-4 border-2 border-gray-400	bg-gray-100 ">
                                {/* <img  src = {a.photos}  /> */}
                              </div>
                            }
                            modal
                          >
                            <div className="box-border mt-3 w-full h-96 border-2 border-gray-400	bg-gray-100 "></div>
                          </Popup>

                          <Popup
                            trigger={
                              <div className="box-border mt-3 ml-3 h-12 w-20 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                            }
                            modal
                          >
                            <div className="box-border mt-3 w-full h-96 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                          </Popup>

                          <Popup
                            trigger={
                              <div className="box-border mt-3 ml-3 h-12 w-20 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                            }
                            modal
                          >
                            <div className="box-border mt-3 w-full h-96 p-4 border-2 border-gray-400	bg-gray-100 "></div>
                          </Popup>
                        </div>
                        <div className="details mt-2 flex">
                          <p className="font-sans font-ms ml-2 text-gray-400 ">
                            by User1337 - <b> Seller,</b> May 1 2019
                          </p>
                          <p className=" ml-4 mr-4 text-gray-600">|</p>
                          <p className=" mr-4 text-gray-600">
                            Helpful?
                            <a href="#" className="underline ml-2 mr-1 ">
                              Yes
                            </a>
                            (0)
                          </p>
                          <p className=" mr-4 text-gray-600">|</p>
                          <p>
                            <a href="#" className="underline text-gray-600 ">
                              Report
                            </a>
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="load font-sans font-bold ml-2 mt-4 text-gray-600 ">
                          LOAD MORE ANSWERS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="side text-gray-600 flex">
                  <p>
                    Helpful?
                    <a href="#" className="underline ml-2 mr-1">
                      Yes
                    </a>
                    ({e.question_helpfulness})
                  </p>
                  <p className=" ml-4">|</p>

                  <Popup
                    trigger={
                      <p>
                        <a href="#" className="underline ml-4">
                          Add Answer
                        </a>
                      </p>
                    }
                    modal
                  >
                    <div class="py-12 ml-12 ">
                      <h2 class="text-2xl font-bold text-gray-700">
                        Submit Your Answer
                      </h2>
                      <p class="mt-2 text-lg text-gray-600">
                        'Product Name':'Question Body'
                      </p>
                      <div class="mt-8 max-w-md">
                        <div class="grid grid-cols-1 gap-1">
                          <label class="block">
                            <span class="text-gray-700">Answer *</span>
                            <textarea
                              class="mt-1 block w-full"
                              rows="3"
                              placeholder="Your Answer..."
                              spellcheck="false"
                            ></textarea>
                          </label>
                          <label class="block">
                            <span class="text-gray-700">Nickame *</span>
                            <input
                              type="text"
                              class="mt-1 block w-full"
                              placeholder="Your Nickname..."
                            />
                          </label>
                          <label class="block">
                            <span class="text-gray-700">Email *</span>
                            <input
                              type="email"
                              class="mt-1 block w-full"
                              placeholder="Your email..."
                            />
                          </label>
                          <button className="w-48 h-12 flex flex-row items-center border border-gray-600">
                            <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                              Upload Your Photos
                            </p>
                          </button>
                          <button className="w-24 h-12 flex flex-row items-center border border-gray-600">
                            <p className="font-sans font-bold  text-base ml-4 mr-2 text-gray-600">
                              SUBMIT
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Qna;
