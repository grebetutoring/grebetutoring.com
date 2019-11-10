import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MarkdownFile } from "./markdown-file";
import { Sitemap } from "./sitemap.schema";

const Emoji: React.FC<{ char: string; label?: string }> = ({
  char,
  label = "emoji"
}) => {
  return (
    <span role="img" aria-label={label}>
      {char}
    </span>
  );
};

export const AppFooter: React.FC<Sitemap> = props => {
  const today = new Date();
  return (
    <>
      <Row className="App-footer-song">
        <Col xs className="App-footer-song-buffer-left">
          <Emoji char="🎶" label="music notes" />
        </Col>
        <Col xs={10} className="App-footer-song-middle">
          <MarkdownFile src="footer.md" />
        </Col>
        <Col xs className="App-footer-song-buffer-right">
          <Emoji char="🎶" label="music notes" />
        </Col>
      </Row>
      <div className="App-copyright">
        This site was generated on {today.toLocaleString()}
        <br />
        Copyright &copy; {today.getFullYear()} Grebe Tutoring. All Rights
        Reserved.
        <br />
        For more information or issue with this site please contact us{" "}
        <a href="mailto:webmaster@grebetutoring.com">here</a>.
      </div>
    </>
  );
};
