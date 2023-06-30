/* eslint-disable react/prop-types */
import Item from "./Item";
function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Item num={i + 1} key={i} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
}

export default Accordion;
