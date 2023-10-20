import { BiTimeFive } from "react-icons/bi";

import logo1 from "../../Assets/logo1.png";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, enim.",
    company: "Novac Line Co.",
  },
  {
    id: 2,
    image: logo1,
    title: "Software Engineer",
    time: "2 weeks ago",
    location: "United States",
    desc: "Exciting opportunity for a skilled software engineer to join our dynamic team.",
    company: "Tech Innovators Inc.",
  },
  {
    id: 3,
    image: logo1,
    title: "Graphic Designer",
    time: "1 month ago",
    location: "Australia",
    desc: "Create stunning visual content and be part of our creative design team.",
    company: "Design Masters Ltd.",
  },
  {
    id: 4,
    image: logo1,
    title: "Marketing Manager",
    time: "Now",
    location: "United Kingdom",
    desc: "Lead marketing campaigns and drive brand growth at our established company.",
    company: "Global Marketing Solutions",
  },
  {
    id: 5,
    image: logo1,
    title: "Data Analyst",
    time: "3 weeks ago",
    location: "Germany",
    desc: "Work with data to uncover insights and support data-driven decision making.",
    company: "Data Insights Corp.",
  },
  {
    id: 6,
    image: logo1,
    title: "Customer Support Specialist",
    time: "Now",
    location: "France",
    desc: "Provide exceptional customer service and assist customers with their inquiries.",
    company: "CustomerCare Pro",
  },
];

export const Jobs = () => {
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {Data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div
            key={id}
            className="group group/item singleJob w-[16rem] p-[1.4rem] bg-white rounded-[0.7rem] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h2 className="text-[1rem] font-semibold text-textColor group-hover:text-white">
                {title}
              </h2>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text-[.8rem] text-[#959595] pt-[1.25rem] border-t-[.1rem] mt-[1.25rem] group-hover:text-white">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="" className="w-[10%]" />
              <span className="text-[.9rem] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>
            <button className="border-[.1rem] rounded-[.7rem] block p-[.6rem] w-full text-[.9rem] font-semibold hover:bg-white group-hover/item:text-textColor group-hover:text-white">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};
