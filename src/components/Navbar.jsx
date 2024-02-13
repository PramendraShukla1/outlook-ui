import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { SiMicrosoftonenote } from "react-icons/si";
import { MdOutlineTask } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { AiTwotoneAppstore } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiTrash } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { GoShield } from "react-icons/go";
import { PiBroomLight } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { PiArrowBendUpLeft } from "react-icons/pi";
import { PiArrowBendDoubleUpLeftLight } from "react-icons/pi";
import { PiArrowBendUpRight } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiTag } from "react-icons/fi";
import { CiFlag1 } from "react-icons/ci";
import { GoPin } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { BsBox2 } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { LuSendHorizonal } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineFolderDelete } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { FaRegNoteSticky } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
import { LuFolderSearch } from "react-icons/lu";
import { BiMenuAltRight } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="min-h-16 bg-[#0f6cbd] pl-3 pr-3 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <CgMenuGridR className="text-4xl text-white" />{" "}
          <p className="text-xl text-white font-normal">Outlook</p>
        </div>
        <div className="border lg:flex hidden items-center bg-white p-2 gap-2 rounded-lg">
          <CiSearch className="text-2xl text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className=" w-[450px] outline-none text-lg placeholder:text-gray-600"
          />
        </div>
        <div className="lg:flex hidden gap-10 text-2xl text-white items-center">
          <IoChatboxOutline />
          <SiMicrosoftonenote />
          <MdOutlineTask />
          <CiBellOn />
          <CiSettings />
          <IoBulbOutline />
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        
        </div>
        <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-10 w-10 rounded-full object-cover lg:hidden flex"
          />
      </nav>

      <div className="flex flex-row">
        {/* //!SIDEBAR NAVIGATION */}
        <div className="min-h-screen bg-[#f0f0f0] w-20 p-5 text-3xl text-gray-600 flex flex-col gap-10 items-center">
          <MdOutlineEmail className="cursor-pointer" />
          <FaRegCalendarAlt className="cursor-pointer" />
          <IoPeopleOutline className="cursor-pointer" />
          <LuListTodo className="cursor-pointer" />
          <AiTwotoneAppstore className="cursor-pointer" />
        </div>

        {/* //!Main Menu NAVIGATION */}
        <div className="flex flex-col w-full">
          {/* //!Main Schedule NAVIGATION */}
          <div className="h-16 bg-[#f5f5f5] w-full p-3 flex items-center justify-between">
            <div className="flex flex-row gap-10 text-lg">
              <IoIosMenu className="text-3xl cursor-pointer" />
              <p className="underline underline-offset-8 font-medium decoration-4 decoration-[#0f6cbd] cursor-pointer">
                Home
              </p>
              <p className="cursor-pointer lg:flex hidden">View</p>
              <p className="cursor-pointer lg:flex hidden">Help</p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <FaRegCalendarAlt className="lg:text-3xl text-xl text-gray-700" />
              <div className="text-sm text-gray-600 flex flex-col flex-wrap">
                <p>IoT-AI</p>
                <p>3:30 PM Microsoft Teams M...</p>
              </div>
            </div>
          </div>
          {/* //!Main Schedule NAVIGATION End*/}
          {/* //!New Email NAVIGATION */}
          <div className="h-auto w-full mb-5">
            <div className="w-full shadow-xl h-16 bg-white border rounded-lg p-2 flex items-center gap-1">
              <div className="w-32 bg-[#0f6cbd] h-full rounded-lg rounded-r-none flex items-center justify-center text-white gap-2 text-lg font-thin">
                <MdOutlineEmail className="text-2xl" />
                <p>New mail</p>
              </div>
              <div className="w-10 bg-[#0f6cbd] h-full flex items-center justify-center text-white text-6xl rounded-r-lg font-thin">
                <RiArrowDropDownLine />
              </div>

              <div className="flex gap-10 p-5 text-2xl border-r">
                <CiTrash />
                <CiBoxes />
                <GoShield />
                <PiBroomLight />
                <FaRegFolderOpen />
              </div>
              <div className="flex gap-10 p-5 text-2xl border-r">
                <PiArrowBendUpLeft />
                <PiArrowBendDoubleUpLeftLight />
                <PiArrowBendUpRight />
              </div>
              <div className="border w-48 h-full flex flex-row">
                <div className="w-5/6 border-r gap-1 flex items-center  h-full p-2">
                  <AiOutlineThunderbolt className="text-2xl " />
                  <p className="text-lg text-gray-600">Quick Search</p>
                </div>
                <div className="w-1/6 flex justify-center items-center">
                  <RiArrowDropDownLine className="text-3xl" />
                </div>
              </div>
              <div className="flex gap-2 items-center text-lg p-5 text-gray-600">
                <HiOutlineMailOpen className="text-2xl" />
                <p>Mark all as read</p>
              </div>
              <div className="flex gap-10 p-5 text-2xl border-r">
                <FiTag />
                <CiFlag1 />
                <GoPin />
                <GoClock />
                <BsBox2 />
              </div>
              <div className="flex gap-10 p-5 text-2xl border-r">
                <FiPrinter />
              </div>
              <div className="flex gap-10 p-5 text-2xl border-r">
                <HiArrowUturnLeft />
              </div>
              <div className="flex gap-10 p-5 text-2xl">
                <BsThreeDots />
              </div>
            </div>
          </div>
          {/* //!New Mail Menu End */}
          {/* Side Navigation Start */}
          <div className="flex flex-row gap-5 w-full">
            <div className="w-2/5 p-5 overflow-scroll h-screen">
              <div>
                <div className=" flex items-center gap-2">
                  <RiArrowDropDownLine className="text-3xl font-thin" />
                  <p className="text-xl text-gray-600 font-semibold">
                    Favorites
                  </p>
                </div>
                <div className="ml-9 mt-5 flex flex-col gap-5">
                  <div className="flex gap-2 items-center border bg-[#cfe4fa] p-2 rounded-lg">
                    <FiInbox className="text-3xl" />
                    <p className="text-lg font-semibold text-gray-600">Inbox</p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <LuSendHorizonal className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Sent Items
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <RiDeleteBin6Line className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Deleted Items
                    </p>
                  </div>
                  <div className="flex items-center ml-12">
                    <p className="text-lg font-normal text-[#739aba]">
                      Add favorite
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className=" flex items-center gap-2 mt-5">
                  <RiArrowDropDownLine className="text-3xl font-thin" />
                  <p className="text-xl text-gray-600 font-semibold">Folders</p>
                </div>
                <div className="ml-9 mt-5 flex flex-col gap-5">
                  <div className="flex gap-2 items-center border bg-[#cfe4fa] p-2 rounded-lg">
                    <FiInbox className="text-3xl" />
                    <p className="text-lg font-semibold text-gray-600">Inbox</p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <FaRegPenToSquare className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">Drafts</p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <LuSendHorizonal className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Sent Items
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <RiDeleteBin6Line className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Deleted Items
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <MdOutlineFolderDelete className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Junk Emails
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <BsArchive className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">Archive</p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <FaRegNoteSticky className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">Notes</p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <CiFolderOn className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Conversation History
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <CiFolderOn className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      RSS Subscription
                    </p>
                  </div>

                  <div className="flex items-center ml-12">
                    <p className="text-lg font-normal text-[#739aba]">
                      Create new folder
                    </p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <LuFolderSearch className="text-3xl" />
                    <p className="text-lg font-normal text-gray-600">
                      Search Folders
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex items-center gap-2 mt-5">
                  <RiArrowDropDownLine className="text-3xl font-thin" />
                  <p className="text-xl text-gray-600 font-semibold">Groups</p>
                </div>
                <div className=" ml-14 mt-5 flex flex-col gap-5">
                  <div className="flex gap-2 items-start p-2 rounded-lg flex-col">
                    <p className="text-lg font-normal text-[#739aba]">
                      New group
                    </p>
                    <p className="text-lg font-normal text-[#739aba]">
                      Discover groups
                    </p>
                    <p className="text-lg font-normal text-[#739aba]">
                      Manage groups
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Side Navigation End */}
            {/* //!Email Notification List */}
            <div className="w-2/3 shadow-lg bg-white rounded-md max-h-screen overflow-scroll">
              <div className="w-full h-16 border-b flex">
                <div className="w-1/5"></div>
                <div className="w-4/5 flex gap-10 items-center justify-between p-5">
                  <div className="flex gap-10">
                    <h1 className="text-lg font-medium underline underline-offset-8">
                      Focused
                    </h1>
                    <h1 className="text-lg font-normal">Other</h1>
                  </div>
                  <div className="flex items-center gap-5">
                    <BiMenuAltRight className="text-3xl" />
                    <FaRegNoteSticky className="text-2xl" />
                  </div>
                </div>
              </div>
              {/* Email List Start */}
              <div className="w-full h-auto border-b flex bg-[#cfe4fa]">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-purple-300 font-bold text-2xl text-gray-700">
                    ET
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">
                    EfficiencyTech Solutions
                  </h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">Enhancing Software Efficie..</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    I wanted to quickly share..
                  </h1>
                </div>
              </div>
              {/* Email List Ends */}
              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-yellow-300 font-bold text-2xl text-gray-700">
                    EM
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">
                    Eileen @ Linkedin Marketing
                  </h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">Pramendra, your posting r...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    Continue growing our page with...
                  </h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-green-300 font-bold text-2xl text-gray-700">
                    DC
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">Developer Connect</h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">You have successfully com...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    You have successfully completed...
                  </h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-pink-300 font-bold text-2xl text-gray-700">
                    L
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">LinkedIn</h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">Upcoming updates for cre...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    You are receiving a transactional em...
                  </h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-purple-300 font-bold text-2xl text-gray-700">
                    AE
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">
                    Automation Anywhere Events
                  </h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">SAVE THE DATE | Imagine...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    We hope you will join us! Save the d...
                  </h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-yellow-300 font-bold text-2xl text-gray-700">
                    LA
                  </div>
                </div>

                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">LinkedIn Ads</h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">Pramendra, convert enga...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    Drive meaningful results on the top...
                  </h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-purple-300 font-bold text-2xl text-gray-700">
                    3G
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">321910303055 gitam</h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">WIPRO TRAINING AND I...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">
                    DEAR NIET STUDENTS, [Referral Cod...
                  </h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-pink-600 font-bold text-2xl text-white">
                    BS
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">
                    Biotech 4th yr 2023-24(20-24...
                  </h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">Meeting regarding Micros...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">No preview available.</h1>
                </div>
              </div>

              <div className="w-full h-auto border-b flex">
                <div className="w-1/6 h-auto flex justify-center items-center">
                  <div className="flex  justify-center items-center border rounded-full h-14 w-14 bg-orange-300 font-bold text-2xl text-gray-700">
                    C
                  </div>
                </div>
                <div className="w-4/5 flex p-5 flex-col gap-1">
                  <h1 className="text-lg font-semibold">Cisco</h1>
                  <div className="w-full flex justify-between text-blue-400 font-semibold">
                    <div className="w-4/5">[Webinar] Hear from Hy...</div>
                    <div className="w-1/5">Wed 2/7</div>
                  </div>
                  <h1 className=" text-gray-600">Secure your seat now!</h1>
                </div>
              </div>
            </div>

            {/* Email Notification List Ends*/}
            <div className="flex flex-col gap-5 w-full pr-3 max-h-screen overflow-scroll">
              <div className="w-full h-auto bg-white shadow-lg rounded-md items-center p-5">
                <p className="text-xl font-semibold h-full text-gray-700">
                  Enhancing Software Efficiency: Quick Tips
                </p>
              </div>
              <div className="w-full border bg-white h-fit rounded-b-lg shadow-lg rounded-md">
                <div className="w-full flex flex-row h-full p-5">
                  <div className="w-[85px]">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                      <p className="text-2xl font-semibold text-gray-700">N</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-xl text-gray-700">
                        EfficiencyTech Solutions
                      </p>
                      <div className="flex gap-5 items-center">
                        <CiFaceSmile className="text-2xl" />
                        <PiArrowBendUpLeft className="text-2xl" />
                        <PiArrowBendDoubleUpLeftLight className="text-2xl" />
                        <PiArrowBendUpRight className="text-2xl" />
                        <div className="border-l p-1 border-r ">
                          <AiTwotoneAppstore className="text-2xl" />
                        </div>
                        <BsThreeDots className="text-2xl" />
                      </div>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                      <p className=" text-gray-700 mt-2">
                        To: SHUKLAPRAMENDRA99@GMAIL.COM; PRAMENDRA SHUKLA
                      </p>
                      <p className="w-1/4 text-sm text-gray-700">
                        Wed 2/7/2024 10:38 AM
                      </p>
                    </div>
                    <div className="mt-5 text-lg text-gray-700">
                      <p>Dear Sir,</p>
                      <p className="mt-3">
                        I wanted to quickly share some thoughts on boosting
                        software efficiency: <br />
                        <br />
                        In software development, adopting an Agile approach can
                        make a significant difference. Breaking down tasks into
                        smaller, manageable chunks allows for quicker iterations
                        and better adaptation to changes. <br />
                        <br />
                        Moreover, leveraging automation tools for testing,
                        deployment, and code review can greatly reduce manual
                        effort and minimize errors, ultimately leading to more
                        efficient workflows. <br />
                        <br />
                        Lastly, nurturing a culture of continuous improvement
                        within the team is key. Encouraging learning, sharing
                        knowledge, and regularly reviewing and refining
                        processes can help ensure that the team is always
                        operating at its best. <br />
                        <br />
                        Just thought I'd pass along these insights. Let me know
                        if you find them helpful! <br />
                        <br />
                        Best,
                        <br />
                        Prince Shukla
                      </p>
                    </div>
                    <div className="mt-10 flex gap-5">
                      <p className="border-[#0f6cbd] p-2 border text-sm text-[#0f6cbd] rounded-lg">
                        I Understand. Thank you.
                      </p>
                      <p className="border-[#0f6cbd] p-2 border text-sm text-[#0f6cbd] rounded-lg">
                        Thank you for letting me know.
                      </p>
                      <p className="border-[#0f6cbd] p-2 border text-sm text-[#0f6cbd] rounded-lg">
                        Ok, Thank you.
                      </p>
                    </div>
                    <div className="mt-10 flex gap-5">
                      <div className="flex gap-2 items-center border w-fit p-2 pl-7 pr-7 rounded-lg">
                        <HiArrowUturnLeft className="text-2xl text-[#0f6cbd]" />
                        <p className="font-bold text-lg">Reply</p>
                      </div>
                      <div className="flex gap-2 items-center border w-fit p-2 pl-7 pr-7 rounded-lg">
                        <PiArrowBendDoubleUpLeftLight className="text-2xl text-[#0f6cbd]" />
                        <p className="font-bold text-lg">Reply all</p>
                      </div>
                      <div className="flex gap-2 items-center border w-fit p-2 pl-7 pr-7 rounded-lg">
                        <PiArrowBendUpRight className="text-2xl text-[#0f6cbd]" />
                        <p className="font-bold text-lg">Forward</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
