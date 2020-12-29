import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <p>
          <small className="text-muted">
            {props.children}
            <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
            <a
              className="badge badge-dark"
              rel="noopener"
              href="https://github.com/hashirshoaeb"
              aria-label="My GitHub"
            >
              Hashir Shoaib
        </a>{" "}
        using <i className="fab fa-react" />
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
