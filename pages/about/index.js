import react,{useState} from "react";
 // icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,

} from "react-icons/fa";
import Image from "next/image";

// import {
//   SiNextdotjs,
//   SiFramer,
//   SiAdobexd,
//   SiAdobephotoshop,
// } from "react-icons/si";


//  data
// const aboutData = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Web Development',
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaNode />,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: 'awards',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'UX/UI Designer - XYZ Company',
//         stage: '2012 - 2023',
//       },
//       {
//         title: 'Web Developer - ABC Agency',
//         stage: '2010 - 2012',
//       },
//       {
//         title: 'Intern - DEF Corporation',
//         stage: '2008 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Web Development - ABC University, LA, CA',
//         stage: '2011',
//       },
//       {
//         title: 'Computer Science Diploma - AV Technical Institute',
//         stage: '2009',
//       },
//       {
//         title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
//         stage: '2006',
//       },
//     ],
//   },
// ];

// import Avatar from "../../components/Avatar"
// import Circles from "../../components/Circles"
// import {motion} from 'framer-motion'
// import { fadeIn } from "../../variants";

const About = () => {
  // const [index,setIndex] = useState(0)
  // console.log(index)
  return(
    <div>
      <div className='p-20 flex flex-col items-center justify-center whitespace-nowrap mt-7 xl:mt-0 text-xs xl:text-lg xl-mx-20  '>
            <h1 className="mx-[100px] text-sm xl:text-2xl mt-8 xl:mt-0 xl:mx-[50px]">About</h1>
            <p>I'm a creative MERN Stack Developer</p>
      </div>
      <div>
        <div className="absolute top-[180px] xl:top-[220px] xl:my-[-50px] xl:px-[180px] ">
              <h6>About me</h6>
              <p className="xl:w-[350px] xl:text-xs text-[10px]">I am a MERN stack developer with a passion for crafting innovative and user-centric web applications. With a deep understanding of both the front-end and back-end aspects of web development, I bring to life dynamic and responsive websites that not only look great but also function seamlessly. I thrive on problem-solving and enjoy the challenge of optimizing performance and user experience. I constantly seek opportunities to expand my skill set and stay updated with the latest trends in the ever-evolving world of web development. My goal is to create digital solutions that leave a lasting impact and deliver exceptional value to users.</p>
              <h6 className=" xl:mt-8 mt-8">Skills</h6>
              <div className=" xl:text-2xl xl:flex xl:flex-col xl:gap-x-6 xl:gap-y-4 xl:mt-2">
                  <div className="flex items-center gap-x-3">
                    <FaHtml5/>
                    <p className="xl:text-sm">Html 5</p>
                  </div>
                  <div className="whitespace-nowrap xl:flex xl:items-center xl:gap-x-3">
                    <FaCss3/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">Css</p>
                  </div>
                  <div className="xl:flex xl:items-center xl:gap-x-3">
                    <FaJs/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">JavaScript</p>
                  </div>
                  <div className="xl:flex xl:items-center xl:gap-x-3">
                    <FaNode/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">Node Js</p>
                  </div>
                  <div className="xl:flex xl:items-center xl:gap-x-3">
                    <FaReact/>
                    <p className="xl:text-sm xl:mx-0 xl:mt-0 mx-7 mt-[-20px]">React Js</p>
                  </div>
                  
              </div>
        </div>


      </div>
      <div>
        <div style={{borderRadius:"50%"}} className="hidden xl:block border-solid border-2 border-white xl:absolute xl:top-[200px] xl:left-[670px] xl:w-[250px] xl:h-[250px] ">
        <Image style={{height:"100%", width:"100%", objectFit:'contain',borderRadius:"50%"}} src={'/Avatar2.png'} width={300} height={200}/>
        </div>

        <div className="absolute xl:top-[174px] mt-5 top-[365px] right-0 xl:right-[170px]">
          <h4>Details</h4>
          <div className="p-y-4 flex  gap-1 mt-4">
            <p className="text-white text-xs xl:text-lg">Name :</p>
            <p className="text-xs xl:text-lg ">Ashutosh Tiwari</p>
          </div>
          <div className="p-y-4 flex  gap-5 mt-3">
            <p className="text-white text-xs xl:text-lg">Age :</p>
            <p className="text-xs xl:text-lg">22 years</p>
          </div>
          <div className="p-y-4 flex  gap-1 mt-3">
            <p className="text-white text-xs xl:text-lg">Location :</p>
            <p className="text-xs xl:text-lg">Vidisha , Madhya Pradesh</p>
          </div>
          <div className="p-y-4 flex  gap-1 mt-3">
            <p className="text-white text-xs xl:text-lg">Email :</p>
            <p className="text-xs xl:text-lg">ashutripathi573@gmail.com</p>
          </div>
        </div>

        <div className=" hidden xl:block absolute xl:top-[60%] right-[180px]">
          <h6>
            Certifications
          </h6>
          <p className="">
            Certified as a Full stack web Developer <br />From <br />Sheriyans Coding School ,Bhopal
          </p>
        </div>

      </div>
    </div>
  )
  
};

export default About;
