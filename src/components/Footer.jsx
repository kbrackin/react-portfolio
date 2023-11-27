import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <footer className="footer">
            <div className="row">
                <section className="col-4 text-center">
                    <a href="https://github.com/kbrackin">My GitHub</a>
                </section>
                <section className="col-4 text-center">
                    <a href="mailto: k.brackin@yahoo.com">My E-mail</a>
                </section>
                <section className="col-4 text-center">
                    <a href="https://www.linkedin.com/in/kevin-brackin-3b6b89257/">My LinkedIn</a>
                </section>
            </div>
        </footer>
    )
}

export default Footer