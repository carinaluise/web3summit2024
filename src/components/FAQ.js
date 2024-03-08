import React, { useState } from "react";

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
          <p>{item.answer}</p>
        </li>
      ))}
    </ul>
  );
};

const faqData = [
  {
    question: "What is Web3 Summit?",
    answer:
      "Web3 Summit is an open and collaborative space where the community can create their own programming. Web3 Foundation invites a full line up of high quality speakers, while individuals, teams and projects use the rest of the space for workshops, presentations, AMA sessions – both intimate and large-scale, chilling, and most importantly, hacking. There will always be a large room dedicated to a hackerspace, where you can host a meetup or hackathon, whiteboard some ideas, present to other teams, and get real work done. This is your Summit, so program it how you want!",
  },
  {
    question: "Where is Web3 Summit?",
    answer:
      "The three days Web3 Summit are held at Funkhaus Berlin. The address is Nalepastraße 18, 12459 Berlin. You can access the venue with our by tram, car, bike and taxi. There is a direct tram connecting Funkhaus to Berlin’s Friedrichshain area. Look out for the M21 at Frankfurter Tor Station; just make sure it’s heading in the right direction!",
  },
  {
    question: "Where to stay in Berlin?",
    answer:
      "Berlin has a very good public transportation system. Therefore, you should be able to connect easily to the direct tram line from any location in the eastern part of the city. With that said, here are two hotels that we recommend, offering both close proximity to Funkhaus, and easy access to the vibrant neighborhoods of Friedrichshain and Kreuzberg.",
  },
  {
    question: "Is there wheelchair access?",
    answer:
      "Nearly all areas are accessible via wheelchair, with the exception of the Sound Chamber. If you need wheelchair assistance, please ask at the Info Point next to Registration. If you have any questions about accessibility, please reach out to us on contact@web3summit.com.",
  },
  {
    question: "Will there be food and drinks at the event?",
    answer:
      "There will be a variety of local food retailers from whom you will be able to purchase food and drinks.",
  },
  {
    question:
      "Is there a live stream of the conference that I can follow online?",
    answer:
      "Yes, there will be a livestream of all talks on the main stage in Studio 1, with a link available on our website. There will also be video recording taking place throughout other sites in the venue.",
  },
  {
    question: "Will there be free Wifi at Funkhaus?",
    answer: "Of course.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Volunteers at Web3 Summit will receive free entry to the conference, food and drinks on the day of the assignment and a Web3 Summit T-Shirt! The volunteer assignment is 8 hours and the application form can be found here. The deadline for application submission is 20th September. You can also join our volunteer Riot channel ‘Public: Web3 Summit: Volunteer’. Need more info? Email us on volunteer@web3summit.com. Looking forward to having you on board!",
  },
  {
    question: "What are the different tickets available?",
    answer:
      "One ticket fits all. The price for a 3-day regular ticket is EUR 600,-. If you think you might qualify for discount, definitely fill out the Discounted Ticket Application Form. All prices include 19% VAT and additional handling costs. Our partner Pretix will provide you with an invoice for each purchase. Please follow our Twitter for updates. Walk up/Box office prices on-site will be higher.",
  },
  {
    question: "Are the tickets refundable?",
    answer:
      "You will have the option to refund your tickets during the 14 days after you complete your purchase.",
  },
  {
    question: "Receipt for my purchase",
    answer:
      "Our partner, Pretix, will automatically issue an invoice upon purchase. Required data will be requested during the ordering process. If there are any issues associated with your receipt, please write to us on contact@web3summit.com.",
  },
  {
    question: "Sponsorship",
    answer:
      "Web3 Summit will have no sponsorships. As part of the no-sponsorship policy, we will not support any form of advertising, including logo placement or preferential provision of speaker slots. However, we would accept your generous contributions, which we would use to finance a certain set of tickets for participants who would otherwise not be able to afford the full ticket price. Eligibility for discounted tickets will be verified through an application process. With gratitude for your generosity in making a contribution, and in proportion to the quantity of tickets your contribution subsidizes, we may be able to offer free tickets to your company in order to attend Web3 Summit. If you or your organization is interested in making a contribution, please contact us on contact@web3summit.com.",
  },
];

export default FAQ;
