import React from 'react';
import Diff from "./Differ"


class DiffChecker extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            oldCode: "Paste or type here...",
            newCode: "Type or paste here..."
        };
    }

    render() {
        const {oldCode, newCode} = this.state

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Diff oldCode={oldCode} newCode={newCode} />
                    </div>
                </div>
            </div>
             
        )
    }
}
export default DiffChecker;
