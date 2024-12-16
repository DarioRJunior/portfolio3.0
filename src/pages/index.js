import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ProjectsBtn from "@/components/ProjectsBtn";

const Home = () => {
  const darioCode = "<Dario.Code/>";

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex  flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Seja bem vindo <br /> a{" "}
            <span className="text-accent">{darioCode}</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Aqui você encontra tudo o que precisa saber sobre mim e dos meus
            projetos, fique a vontade para explorar e caso tenha dúvidas entre
            em contato comigo!
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      <div>Image</div>
    </div>
  );
};

export default Home;
