import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Faq = () => {
  const questions = [
    {
      question: "What are the available types of drills ?",
      answer:
        "There are various types of drills such as manual hand operated drills like bow drill, gimlet, breast drill and push drill. Electrical drills are pistol grip drill, hammer drill, cordless drill, drill press, radial drill and drilling cum milling machine.",
    },
    {
      question: "Where Pillar drill machines are used?",
      answer:
        "These are used to drill the solid materials with different sizing capacities ranging from 13mm to 40mm. It is used for tapping, screwing, counter boring, lapping etc. Easy installation and smooth operation with this type of drill press have made it more popular in commercial usage.",
    },
    {
      question: "Where Radial drill machines are used?",
      answer:
        "Radial arm to drilling increase the operation versatility. Drilling of large and heavy metals and solid materials are executed quite systematically with accuracy and precision. The high quality steel parts, drilling column, arms and geared work head increase the tolerance capacity of the machine. This heavy capacity radial drills are used where it needs to bear high drilling resistant for drilling heavy metals with precision work ranging from 25mm to 40mm.",
    },
    {
      question: "Why to use all Geared radial drill machine?",
      answer:
        "This is the advanced radial drill equipment and used in the industries where required high performance and precision drilling. It equipped with gears can greatly handle and adjust the speed of spindle to enhance the drilling accuracy with high drilling force. It is used with auto feed and fine feed to drill 40mm, 45mm drilling capacities in metalworking industries.",
    },
    {
      question: "Where to use Drilling cum milling machine?",
      answer:
        "This two in one combo function machine is used for drilling as well milling and other machining like slotting and tapping. This high performance multi tasking drill machine is used where multiple job work needs to be done by a single operator occasionally or frequently.",
    },
    {
      question:
        "What are the safety measures one must take during drilling operation?",
      answer:
        "It is one of the risky instruments during drilling execution. Several precautionary measures can prevent the accidents like always use holding device to fix the work piece from being escaped. Don’t shake/adjust the work piece while drilling is on. Use brush to clean the drilled matter to avoid burn. Keep any of the flammable material away from the drilling place. Hold the drill machine straight during drill cutting. Keep the drilling table clean during and after the process. One must use face protector to protect face and eye during drilling. Drilling must be careful to avoid breakage of drill bits that can harmful to the operator. Check the drill bits and drill unit well before operation. Drill bits must be sharpened.",
    },
  ];
  return (
    <div className="w-full bg-neutral py-20">
      <SectionTitle>FAQ.</SectionTitle>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-2/5 max-auto px-5 lg:p-0 rounded-lg">
          {questions.map((question, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border rounded-lg"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:border-2 border-primary rounded-lg">
                {question.question}
              </div>
              <div className="collapse-content bg-white">
                <p className="p-6">{question?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
