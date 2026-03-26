import { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import tff from "../assets/images/tff.png";


function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Flying Training School</h3>
            <h4>Information Technology Department</h4>
            <p>Installed and configured software applications</p>
            <p>Deployed and maintained Windows 10 operating systems</p>
            <p>Troubleshot hardware and software issues</p>
            <p>Created technical documentation and reports</p>

            <div className="image-card" onClick={() => setSelectedImage(tff)}>
  📄 View certificate
</div>

          </VerticalTimelineElement>

        </VerticalTimeline>

       
      </div>
      {selectedImage && (
  <div className="modal" onClick={() => setSelectedImage(null)}>
    <img src={selectedImage} alt="preview" />
  </div>
)}
    </div>


  );

  
}

export default Experience;