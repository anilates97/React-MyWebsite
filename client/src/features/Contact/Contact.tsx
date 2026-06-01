import React, { FormEvent, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import { Element } from "react-scroll";
import RevealOnce from "../../components/RevealOnce";

type StatusT = {
  success: boolean;
  message: string;
};

function Contact() {
  const contactRef = useRef(null);
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusT>({
    success: false,
    message: "",
  });

  const apiUrl =
    import.meta.env.VITE_CONTACT_API_URL ??
    "https://my-website-server-one.vercel.app";

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedDetails = Object.fromEntries(
      Object.entries(formDetails).map(([key, value]) => [key, value.trim()])
    ) as typeof formDetails;
    const values = Object.values(trimmedDetails);
    if (values.some((value) => value === "")) {
      setStatus({
        success: false,
        message: "Please fill in all fields!",
      });
      return;
    }

    setButtonText("Sending...");
    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(trimmedDetails),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setButtonText("Send");
      const result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch {
      setStatus({
        success: false,
        message: "Server error, please try again later.",
      });
    } finally {
      setButtonText("Send");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Element name="connect" ref={contactRef}>
        <Container>
          <RevealOnce className="contact-bx">
            <Row className="align-items-center">
              <Col md={6}>
                <img src={contactImg} alt="Contact Us" />
              </Col>
              <Col md={6}>
                <h2>Get In Touch</h2>
                <p className="contact-intro">
                  Open to junior / early-career roles, freelance work or a
                  quick conversation about a project. The form below comes
                  straight to my inbox.
                </p>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        required
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        required
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email"
                        required
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.subject}
                        placeholder="Subject"
                        required
                        onChange={(e) =>
                          onFormUpdate("subject", e.target.value)
                        }
                      />
                    </Col>
                    <Col>
                      <textarea
                        rows={6}
                        value={formDetails.message}
                        placeholder="Message"
                        required
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                      />
                      <button type="submit" disabled={isSubmitting}>
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                    )}
                  </Row>
                </form>
              </Col>
            </Row>
          </RevealOnce>
        </Container>
      </Element>
    </section>
  );
}

export default Contact;
