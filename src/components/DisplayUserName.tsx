import * as React from "react";
export interface SFCCounterProps {
    username: string;
}
const DisplayUserName: React.SFC<SFCCounterProps> = (props) => {
    const {username} = props;
    return (
        <div>{"Username: " + username}</div>
    );
}

export default DisplayUserName;