import React from 'react'
import { DiffEditor } from '@monaco-editor/react'

class Diff extends React.PureComponent {
    render = () => {
      return (
        <DiffEditor
            original={this.props.oldCode}
            modified={this.props.newCode}
            originalLanguage="json"
            modifiedLanguage="json"
            height="500px"
            options={{originalEditable:true, language: "json"}}
        />
      )
    }
  }

  export default Diff;