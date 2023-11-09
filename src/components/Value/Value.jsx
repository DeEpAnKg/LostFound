import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./doggo.jpg" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We are always ready to help by providing the best solution for you.
            <br />
            We believe that we can reunite a missing pet with its family.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[expandedItem]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${i === expandedItem ? "expanded" : "collapsed"}`}
                uuid={i}
                key={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
