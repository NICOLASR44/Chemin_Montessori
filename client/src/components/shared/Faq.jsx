import "./styles/Faq.css";
import { useState } from "react";
import faqData from "../../lib/faqData";

function Faq() {
  const questionStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  const answerStyle = {
    fontSize: "1rem",
    fontWeight: "normal",
    marginTop: "0.5rem",
  };

  const [activeFaq, setActiveFaq] = useState(0);

  function toggleFaq(index) {
    setActiveFaq(activeFaq === index ? -1 : index);
  }

  function handleKeyPress(event, index) {
    if (event.key === "Enter" || event.key === " ") {
      toggleFaq(index);
    }
  }

  return (
    <div className="faq">
      <ul className="faq__list">
        {faqData.map((item, index) => (
          <li
            key={item.id}
            className={`faq__item ${activeFaq === index ? "active" : ""}`}
          >
            <div
              className="faq__header"
              onClick={() => toggleFaq(index)}
              onKeyDown={(event) => handleKeyPress(event, index)}
              tabIndex={0}
              role="button"
              style={questionStyle}
            >
              <span className="faq__question">{item.question}</span>
              <span className="faq__icon">
                {activeFaq === index ? "−" : "+"}
              </span>
            </div>
            {activeFaq === index && item.answer && (
              <div className="faq__answer" style={answerStyle}>
                <p>{item.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
