import React from 'react';
import Link from "next/link";

const MyLink = ({to, children, ...props}) => {
  return (
    <Link href={to} rel="preload" {...props}> 
      <a {...props}>
        {children}
      </a>
    </Link>
  );
};

export default MyLink;