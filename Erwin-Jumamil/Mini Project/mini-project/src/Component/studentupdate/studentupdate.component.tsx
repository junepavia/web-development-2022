import * as React from "react";

export const StudentUpdate = (props: any) => {
  const { name, username, email } = props;
  return (
    <div>
      <input type="text" placeholder="test" value={name} />
      <input type="text" placeholder="test" value={username} />
      <input type="text" placeholder="test" value={email} />
    </div>
  );
};
