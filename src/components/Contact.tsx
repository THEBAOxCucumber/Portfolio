import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Contact.scss';
import { useEffect } from "react";

function Contact() {

  // 🔥 scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach(el => {
      el.classList.add("hidden");
      observer.observe(el);
    });
  }, []);

  return (
    <div id="contact">
      <div className="items-container">
      <h1>Contact</h1>

      {/* 📞 PHONE */}
      <div className="contact-card">
  <div className="contact-left">
    <div className="icon phone">
      <PhoneIcon />
    </div>
    <div>
      <p className="label">PHONE</p>
      <p className="value">098-9245268</p>
    </div>
  </div>
</div>

<div className="contact-card">
  <div className="contact-left">
    <div className="icon email">
      <EmailIcon />
    </div>
    <div>
      <p className="label">EMAIL</p>
      <a className="value" href="mailto:phiriyaporn.y@ku.th" target="_blank" rel="noreferrer">phiriyaporn.y@ku.th</a>
      <p></p>
      <a className="value" href="mailto:piriyaporn4849@gmail.com" target="_blank" rel="noreferrer">piriyaporn4849@gmail.com</a>
    </div>
  </div>
</div>

<div className="contact-card">
  <div className="contact-left">
    <div className="icon github">
      <GitHubIcon />
    </div>
    <div>
      <p className="label">GitHub</p>
      <p className="value">@THEBAOxCucumber</p>
    </div>
  </div>

  <a
    href="https://github.com/THEBAOxCucumber"
    target="_blank"
    rel="noreferrer"
    className="btn"
  >
    Visit →
  </a>
</div>
    </div>
    </div>
  );
}

export default Contact;