import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { VscBellDot } from "react-icons/vsc";
import { CiTimer } from "react-icons/ci";
import { LuClipboardCheck } from "react-icons/lu";
import { GoEye } from "react-icons/go";
import { HiUsers } from "react-icons/hi";
import { LuBarChart2 } from "react-icons/lu";
import user from "../assets/user.jpg";

import logo from "../assets/logo.png";

function Navbar() {
	return (
		<>
			<div className="h-screen w-[3rem] bg-gray-200 items-center flex flex-col justify-between">
				<div className="flex flex-col items-center h-[70%] justify-between ">
					<img className="h-10 w-10" src={logo} alt="hello" />
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<CgMenuLeft className="h-10 w-5" />
					</button>
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<VscBellDot className="h-10 w-5" />
					</button>
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<CiTimer className="h-10 w-5" />
					</button>
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<LuClipboardCheck className="h-10 w-5" />
					</button>
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<GoEye className="h-10 w-5" />
					</button>
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<HiUsers className="h-10 w-5" />
					</button>
					<button className="hover:bg-gray-500 hover:text-white h-10 w-10 flex items-center justify-center rounded-full">
						<LuBarChart2 className="h-10 w-5" />
					</button>
				</div>
				<div>
					<button className="h-7 w-7 bg-white rounded-full overflow-hidden">
						<img src={user} alt="user"></img>
					</button>
				</div>
			</div>
		</>
	);
}

export default Navbar;
