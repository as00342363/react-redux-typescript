import * as React from "react";
export interface SFCCounterProps {
    onUpdateUserName: (e:any) => any;
}
const Header: React.SFC<SFCCounterProps> = (props) => {

    return (
        <div>
            <input onChange= {props.onUpdateUserName}/> &nbsp;
        </div>
    );
}

export default Header;  