import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-primary rounded-lg">
      <p className="text-white text-center p-3 uppercase font-semibold">
        {skill}
      </p>
    </div>
  );
};

export default SkillCard;
