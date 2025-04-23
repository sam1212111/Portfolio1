import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiMysql, SiFirebase, SiTailwindcss, SiAndroid } from "react-icons/si";

export const SkillsData = [
	{
		name: "HTML",
		icon: <FaHtml5 style={{color: '#E34F26'}} />,
	},
	{
		name: "CSS",
		icon: <FaCss3Alt style={{color: '#1572B6'}} />,
	},
	{
		name: "Javascript",
		icon: <DiJavascript1 style={{color: '#F7DF1E'}} />,
	},
	{
		name: "React Js",
		icon: <FaReact style={{color: '#61DAFB'}} />,
	},
	{
		name: "Node Js",
		icon: <FaNodeJs style={{color: '#339933'}} />,
	},
	{
		name: "Express Js",
		icon: <SiExpress style={{color: '#ffffff'}} />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb style={{color: '#47A248'}} />,
	},
	{
		name: "MySQL",
		icon: <SiMysql style={{color: '#4479A1'}} />,
	},
	{
		name: "Android",
		icon: <SiAndroid style={{color: '#3DDC84'}} />,
	},
	{
		name: "Firebase",
		icon: <SiFirebase style={{color: '#FFCA28'}} />,
	},
	{
		name: "Git",
		icon: <FaGithub style={{color: '#181717'}} />,
	},
	{
		name: "Figma",
		icon: <FaFigma style={{color: '#F24E1E'}} />,
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss style={{color: '#06B6D4'}} />,
	}
];