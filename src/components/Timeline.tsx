import { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import transcript from "../assets/images/transcript.jpg";
import transcriptBC from "../assets/images/S__5005334_0.jpg";
import transcriptBC1 from "../assets/images/S__5005335_0.jpg";

function Timeline() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Kasetsart University Kamphaeng Saen Campus</h3>
            <h4>Information Technology</h4>
            <p>Faculty of Arts and Sciences B.S. in Information Technology</p>

            <div className="image-card" onClick={() => setSelectedImage(transcript)}>
  📄 View Transcript
</div>

          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >

            <h3 className="vertical-timeline-element-title">Nakhon Pathom Vocational Colleg</h3>
            <h4 className="vertical-timeline-element-subtitle">Business Computer</h4>
            <p>
              Academic Category: Commerce , Business Computer
            </p>
            <div className="image-card" onClick={() => setSelectedImage(transcriptBC)}>
  📄 View Transcript
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

export default Timeline;