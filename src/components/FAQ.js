import React, { useState } from "react";

import { urls } from "../config/site";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleDropdown = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const isOpen = (index) => {
    return openIndexes.includes(index);
  };

  return (
    <ul className="faq">
      {faqData.map((item, index) => (
        <li key={index} className={isOpen(index) ? "open" : ""}>
          <h3 onClick={() => toggleDropdown(index)}>{item.question}</h3>
          <div
            className="faq-content"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </li>
      ))}
    </ul>
  );
};

const { submitForm, nodespaceForm, volunteerForm } = urls;

const faqData = [
  {
    question: "What is Web3 Summit?",
    answer:
      "<p>Web3 Summit is an open and collaborative space where the community can create their own programming. Web3 Foundation invites a full line up of high quality speakers, while individuals, teams and projects use the rest of the space for workshops, presentations, AMA sessions – both intimate and large-scale, chilling, and most importantly, hacking. There will always be a large room dedicated to a hackerspace, where you can host a meetup or hackathon, whiteboard some ideas, present to other teams, and get real work done. This is your Summit, so program it how you want!</p>",
  },
  {
    question: "Where is Web3 Summit?",
    answer:
      "<p>Web3 Summit will take place at Funkhaus Berlin <br />(Nalepastr. 18, 12459 Berlin, Germany)</p> <p>Funkhaus Berlin is located in the eastern part of Berlin, specifically in the district of Rummelsburg. Funkhaus Berlin is a historic building complex that was once the headquarters of the East German broadcasting corporation. It is situated along the banks of the River Spree, providing a picturesque setting for the Web3 Summit. Funkhaus Berlin is renowned for its unique architecture and its significance in Berlin's cultural scene, serving as a hub for music production, recording studios, live performances, and events.</p>",
  },
  {
    question: "How to get to the Web3 Summit?",
    answer:
      "<p>From the main train station in Berlin (Berlin Hauptbahnhof), you can reach Funkhaus Berlin using public transportation:</p><p>- Take the S-Bahn (S5, S7, or S75): Take any of the S-Bahn lines S5 (towards Strausberg Nord), S7 (towards Ahrensfelde), or S75 (towards Wartenberg) heading eastbound. Ride the S-Bahn to the Ostkreuz station.</p><p>- At Ostkreuz station, take tram 21 heading eastbound (direction S Köpenick) to Köpenicker Chaussee/Blockdammweg. From there it is about a 7 minute walk until you reach Funkhaus Berlin.</p><p>We recommend travelling to Funkhaus Berlin with public transport! There is a limited number of parking spots for those travelling by car.</p>",
  },
  {
    question: "How can I contribute to Web3 Summit?",
    answer: `<p>You can submit a talk or workshop proposal following this <a href='${submitForm}' target="_blank" rel="noopener noreferrer">link</a>. The deadline for submission is May 24th, 2024.</p>
    
    <p>Showcase your projects, host discussions, and engage with the Web3 community in your own dedicated space. To learn more follow this <a href='${nodespaceForm}' target="_blank" rel="noopener noreferrer">link</a>.</p>

    <p>In addition, an entire hall has been dedicated to host community-led hackerspaces. This dynamic space is open 24/7 throughout the Summit, offering a staggering 58 hours of uninterrupted hacking time. It's your chance to dive deep into your projects, collaborate with fellow innovators, and turn your visions into reality.</p>
    
    <p>If you would like to volunteer please follow this <a href='${volunteerForm}' target="_blank" rel="noopener noreferrer">link</a>.</p>
    
    <p>More details to follow on other ways to participate including community creative installations.</p>`,
  },

  {
    question: "Where to stay in Berlin?",
    answer:
      "<p>Berlin has a very good public transportation system. Therefore, you should be able to connect easily to the direct tram line from any location in the eastern part of the city. With that said, here are two hotels that we recommend, offering both close proximity to our venue, and easy access to the vibrant neighbourhoods of Friedrichshain and Kreuzberg.</p><p><a href='https://michelbergerhotel.com/de/' target='_blank' rel='rel noopener noreferrer'>Michelberger Hotel</a><br><a href='https://www.nh-hotels.de/hotel/nhow-berlin?gmb' target='_blank' rel='rel noopener noreferrer'>Hotel nhow Berlin</a></p>",
  },
  {
    question: "Is there wheelchair access?",
    answer:
      "<p>Nearly all areas are accessible via wheelchair. If you need wheelchair assistance, please ask at the Info Point next to Registration. If you have any questions about accessibility, please reach out to us on <a href='mailto:contact@web3summit.com' target='_blank'>contact@web3summit.com</a></p>",
  },
  {
    question: "Will there be food and drinks at the event?",
    answer:
      "<p>There will be a variety of local food retailers from whom you will be able to purchase food and drinks.</p>",
  },
  {
    question:
      "Is there a live stream of the conference that I can follow online?",
    answer:
      "<p>Yes, there will be a livestream of all talks on the main stage in Studio 1, with a link available on our website. There will also be video recording taking place throughout other sites in the venue.</p>",
  },
  {
    question: "Will there be free Wifi at the venue?",
    answer: "<p>Yes</p>",
  },
  {
    question: "What are the different tickets available?",
    answer:
      "<p>The Web3 Summit offers two types of tickets: Early Adopter and General Admission, designed to accommodate different participants' needs and ensure a diverse, inclusive community.</p><p><b>Early adopter:</b> These are limited and aimed at those who are quick to support the event. They are likely to sell out fast and are meant for individuals who are keen on being part of the Summit from an early stage.</p><p><b>General Admission:</b> These tickets are intended for individuals who work for well-funded organizations and projects. The pricing and structure of General Admission tickets are designed to reflect the financial capacity of participants from more established entities. This category helps balance the economic spectrum of attendees, ensuring that the event remains accessible to a wider audience while also securing funds necessary for the Summit's success.</p><p>Our partner Tito will provide you with an invoice for each purchase. Please follow our Twitter for updates.</p>",
  },
  {
    question: "Are the tickets refundable?",
    answer:
      "<p>Tickets are non-refundable but can be transferred to another attendee upon request.</p>",
  },
  {
    question: "Receipt for my purchase",
    answer:
      "<p>Our partner, Tito, will issue an invoice upon purchase. Required data will be requested during the ordering process. If there are any issues associated with your receipt, please write to us on <a href='mailto:contact@web3summit.com' target='_blank'>contact@web3summit.com</a>.</p>",
  },
  {
    question: "Sponsorship",
    answer:
      "<p>Web3 Summit will have no sponsorships. As part of the no-sponsorship policy, we will not support any form of advertising, including logo placement or preferential provision of speaker slots.</p><p>However, we will accept scholarship contributions, which will be used to finance tickets for participants who would otherwise not be able to afford the full ticket price.</p><p>If you or your organization is interested in making a contribution, please contact us on <a href='mailto:contact@web3summit.com' target='_blank'>contact@web3summit.com</a>.</p>",
  },
];

export default FAQ;
