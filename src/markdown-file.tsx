import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import image_files from "./content/images";
import markdown_files from "./content/markdowns";

export interface MarkdownFileProps {
  src: string;
}

export interface MarkdownFileState {
  src: string;
  markdown?: string;
}

export function transformImageUri(
  uri: string,
  children?: ReactNode,
  title?: string,
  alt?: string
) {
  if (uri.startsWith("http")) {
    return uri;
  }

  const localSrc = uri.replace(".", "_");
  if (localSrc in image_files) {
    return image_files[localSrc];
  }

  return null;
}

export class MarkdownFile extends React.Component<MarkdownFileProps> {
  state: MarkdownFileState = { src: "" };

  async loadMarkdown(src: string) {
    const localSrc = src.replace(".", "_");
    if (localSrc in markdown_files) {
      this.setState({ src });
      const response = await fetch(markdown_files[localSrc]);
      const markdown = await response.text();
      this.setState({ src, markdown });
    }
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
        {...{ transformImageUri }}
      />
    );
  }
}
