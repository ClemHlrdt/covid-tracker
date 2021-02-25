import React from "react";
import { classnames } from "../../../utilities/classNamesUtils";
import PropTypes from "prop-types";

import "./Button.css";

export default function Button({ click, children, size, type, disabled }) {
  const bSize = "btn-" + size;
  const bType = "btn-" + type;

  return (
    <button
      aria-label={children}
      onClick={click}
      className={classnames("btn", bSize, bType)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["xs", "md", "xl"]),
  type: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  children: PropTypes.string.isRequired,
};
