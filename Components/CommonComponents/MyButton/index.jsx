import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MyButton = ({ to, children, className, arrow = false, ...props }) => {
  const classes = `myDefaultButton ${className}`;

  return (
    <Link href={to} rel="preload">
      <a className={classes} {...props}>
        <span>{children}</span>
        {arrow && <FontAwesomeIcon icon={faArrowRightLong} />}
      </a>
    </Link>
  );
};

MyButton.propTypes = {
  arrow: PropTypes.bool,
};

export default MyButton;
