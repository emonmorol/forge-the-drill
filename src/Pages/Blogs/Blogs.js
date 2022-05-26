import React from "react";
import Footer from "../../Components/Footer/Footer";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Blogs = () => {
  const questions = [
    {
      question: "How will you improve the performance of a React Application ?",
      answer:
        " To improve the performance of react application  I would keep component state whenever necessary . I would prevent unnecessary re-renders . whenever I see code is repeating I would use another component for that. and whenever I use image I would use it after compressing it ",
    },
    {
      question: "How does prototypical inheritance work?",
      answer:
        "Prototypical inheritance actually the ability to access object properties from another object.JavaScript prototype is used to add new properties and methods to an existing object. We can then use JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object",
    },
    {
      question: "Why you do not set the state directly in React?",
      answer:
        "In React when we set state directly it contains on value and than when we try to access it and change ... initially it doesn't give the value the page needs be reload . So It creates and bad ux and dev experience",
    },
    {
      question:
        "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
      answer:
        " There are several ways to do this . We can user for loop for that . first we have to loop through the array than we get each product . than for ease product we use if condition for the name provided ",
    },
    {
      question: "What is a unit test? Why should write unit tests?",
      answer:
        " Unit test is test for a specific short code like a single function . we should write unit test because of so many reason before see the deployed code unit test ensures that this code is right and quality full . For debugging and solving error unit tests helps a lot ",
    },
  ];

  return (
    <div>
      <div className="w-full py-20 min-h-screen">
        <SectionTitle>Question & Answer</SectionTitle>
        <div className="w-full flex justify-center">
          <div className="w-2/5 max-auto p-0 rounded-lg">
            {questions.map((question, index) => (
              <div
                key={index}
                className="collapse collapse-arrow border rounded-lg"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:border-2 border-primary rounded-lg">
                  {question.question}
                </div>
                <div className="collapse-content bg-neutral">
                  <p className="p-6">{question?.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
