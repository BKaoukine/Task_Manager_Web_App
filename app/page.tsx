import Image from "next/image";
import SideNavBar from "@/components/left_nav_bar";
import ProjectSection from "@/components/project_section";



export default function Home() {
  return (
    <main className="flex flex-row justify-between overflow-x-hidden">
            <SideNavBar/>

            <ProjectSection/>
    </main>
  );
}
function useClient() {
    throw new Error("Function not implemented.");
}

