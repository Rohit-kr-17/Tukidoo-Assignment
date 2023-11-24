import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSlideshow } from "react-icons/bi";
import { RxVideo } from "react-icons/rx";
import { IoExitOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiChalkboard } from "react-icons/bi";
import { PiWechatLogo } from "react-icons/pi";
import { FaRegShareSquare } from "react-icons/fa";
import { GrMicrophone } from "react-icons/gr";
import { BsCameraVideo } from "react-icons/bs";
import { GrDocumentVideo } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import student from "../assets/student.jpg";
import Teacher from "../assets/Teacher.jpg";
function Classroom() {
	return (
		<div className=" p-5 h-screen ">
			<Heading />
			<Navigation />
			<CallDetails />
		</div>
	);
}

const Heading = () => {
	return (
		<>
			<div className=" flex mb-5 items-center justify-between ">
				<div className="flex items-center ">
					<div className="bg-gray-200 h-10 w-10 flex justify-center items-center rounded-lg">
						<IoIosArrowBack className="text-gray-500" />
					</div>
					<div className=" text-xl ml-5 font-bold">Basic Mathematics 101</div>
				</div>
				<div className="flex">
					<div className="flex items-center">
						<div className="h-5 mr-2 w-5 bg-blue-500 rounded-full flex justify-center items-center">
							<IoIosCall className="text-white" />
						</div>
						<span>Call Teacher</span>
					</div>
					<div className="flex ml-2 items-center">
						<div className="h-5 mr-2 w-5 bg-red-500 rounded-full flex justify-center items-center">
							<FaUser className="text-sm text-white" />
						</div>
						<span>Support</span>
					</div>
				</div>
			</div>
		</>
	);
};
const Navigation = () => {
	const active = "bg-white pl-5 pr-5 rounded-full text-black";
	return (
		<>
			<div className="flex mb-5 pr-5 pl-5 items-center justify-between h-10 rounded-full bg-gray-200">
				<button className="flex items-center">
					<SiGoogleclassroom className="text-gray-500" />
					<span className="pl-2 text-gray-500">Classroom</span>
				</button>
				<button className="flex items-center">
					<BiChalkboard className="text-gray-500" />
					<span className="pl-2 text-gray-500">Whiteboard</span>
				</button>
				<button className={active + ` flex h-8  items-center`}>
					<RxVideo className="text-gray-500" />
					<span className="pl-2 text-gray-500">Videos</span>
				</button>
				<button className="flex items-center">
					<BiSlideshow className="text-gray-500" />
					<span className="pl-2 text-gray-500">Slideshow</span>
				</button>
				<button className="flex items-center">
					<IoDocumentSharp className="text-gray-500" />
					<span className="pl-2 text-gray-500">Documents</span>
				</button>
				<button className="flex items-center">
					<GrDocumentVideo className="text-gray-500" />
					<span className="pl-2 text-gray-500">Doc Cam</span>
				</button>
			</div>
		</>
	);
};
const CallDetails = () => {
	const active = "";
	return (
		<div className="flex items-center justify-between">
			<div className="flex w-[15%] flex-col">
				<div className="relative border-2 mb-2 overflow-hidden rounded-3xl h-[12rem] w-[12rem]">
					<img src={student} alt="student"></img>
					<div className="absolute bottom-0 pl-4 pr-3 rounded-tr-full left-0 tex-white bg-gray-200">
						Student
					</div>
				</div>
				<div className=" relative border-2 overflow-hidden mb-2 h-[12rem] rounded-3xl w-[12rem]">
					<img src={Teacher} alt="student"></img>
					<div className="absolute bottom-0 pl-4 pr-3 rounded-tr-full left-0 tex-white bg-gray-200">
						Teacher
					</div>
				</div>
				<div className="mb-2 mt-2 flex flex-wrap   ">
					<div className=" mr-5 mb-2 flex items-center justify-center flex-col">
						<div className="h-[3rem] w-[3rem]  flex items-center justify-center rounded-xl bg-gray-200">
							<BsCameraVideo />
						</div>
						<span>Cam</span>
					</div>
					<div className=" mr-5 mb-2 flex items-center justify-center flex-col">
						<div className="h-[3rem] w-[3rem]  flex items-center justify-center rounded-xl bg-gray-200">
							<GrMicrophone />
						</div>
						<span>Mic</span>
					</div>
					<div className="flex mr mb-2 items-center justify-center flex-col">
						<div className="h-[3rem] w-[3rem]  flex items-center justify-center rounded-xl bg-gray-200">
							<FaRegShareSquare />
						</div>
						<span>Share</span>
					</div>
					<div className="flex mr-5 mb-2 items-center justify-center flex-col">
						<div className="h-[3rem] w-[3rem]  flex items-center justify-center rounded-xl bg-gray-200">
							<PiWechatLogo />
						</div>
						<span>Chat</span>
					</div>
					<div className="flex mr-5 mb-2 items-center justify-center flex-col">
						<div className="h-[3rem] w-[3rem] bg-blue-400 text-white flex items-center justify-center  rounded-xl">
							<IoExitOutline className="text-2xl" />
						</div>
						<span>Leave</span>
					</div>
				</div>
			</div>
			<div className="flex-1 w-full justify-end ml-10">
				<VideoPlayer />
			</div>
		</div>
	);
};
const VideoPlayer = () => {
	return (
		<div>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=gQ5qVtoLMk4" // Replace with the URL of your video
				controls={true}
				width="100%"
				height="560px"
			/>
		</div>
	);
};

export default Classroom;
