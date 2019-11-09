import React from "react";
import ReactMarkdown from "react-markdown";

import "./App.css"

function staticAssetUri(uri: string) {
  return uri.startsWith("http") ? uri : process.env.PUBLIC_URL + uri;
}

export interface MarkdownFileProps {
  src: string;
}

export interface MarkdownFileState {
  src: string;
  markdown?: string;
}

export class MarkdownFile extends React.Component<MarkdownFileProps> {
  state: MarkdownFileState = { src: "" };

  async loadMarkdown(src: string) {
    this.setState({ src });
    const response = await fetch(process.env.PUBLIC_URL + src);
    const markdown = await response.text();
    this.setState({ src, markdown });
  }

  render() {
    let { src, markdown } = this.state;

    if (this.props.src !== src) {
      markdown = undefined;
      this.loadMarkdown(this.props.src);
    }

    if (markdown === undefined) {
      return <></>;
    }

    return (
      <ReactMarkdown source={markdown} transformImageUri={staticAssetUri} />
    );
  }
}
