import React from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { getFile } from "./content/localFiles";

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
    const response = await fetch(getFile(src));
    const markdown = await response.text();
    this.setState({ src, markdown });
  }

  render() {
    let { src, markdown } = this.state;

    if (this.props.src !== src) {
      markdown = undefined;
      setTimeout(() => this.loadMarkdown(this.props.src), 0);
    }

    if (markdown === undefined) {
      return <></>;
    }

    return (
      <ReactMarkdown
        source={markdown}
        plugins={[RemarkMathPlugin]}
        renderers={{
          math: (props: { value: string }) => (
            <BlockMath>{props.value}</BlockMath>
          ),
          inlineMath: (props: { value: string }) => (
            <InlineMath>{props.value}</InlineMath>
          )
        }}
        transformImageUri={getFile}
      />
    );
  }
}
