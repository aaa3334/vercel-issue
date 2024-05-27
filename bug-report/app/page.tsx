import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Demo <Link href="/signupflow">This links to signupflow</Link> whereas{" "}
      <Link href="/otherfolder">This links to otherfolder</Link>
    </div>
  );
};

export default page;
