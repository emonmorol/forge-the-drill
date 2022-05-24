import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

function MobileLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className="mobile-link"
        style={
          match && {
            border: "2px solid white",
            borderRadius: "15px 15px 0px 15px",
          }
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default MobileLink;
