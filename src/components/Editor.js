import React from 'react';
import {ControlledEditor} from '@monaco-editor/react';

class Editor extends React.PureComponent {
    render() {
        return (
            <ControlledEditor
                value={this.props.value || null}
                onChange={this.props.handleEditorChange}
                language="json"
                height="500px"
          />
        )
    }
}
export default Editor;


