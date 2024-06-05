import image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

const Home = () => {
	return (
		<div className="bg-primary/60 h-full">
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to=black/10">
				<div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
					{/* title */}
					<h1 className="h1">
						Transforming Ideas <br /> Into{" "}
						<span className="text-accent">Digital Reality</span>
					</h1>
					{/* description */}
					<p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
						I am a full-stack developer with a passion for creating
						beautiful and functional websites. I have a strong
						background in web development and I am always looking
						for
					</p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
				</div>
			</div>
			{/* image */}
			<div>image</div>
		</div>
	);
};

export default Home;
