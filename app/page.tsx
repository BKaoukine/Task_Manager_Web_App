"use client"

import SideNavBar from "@/components/left_nav_bar";
import ProjectSection from "@/components/project_section";
import { useEffect, useState } from "react";


export default function Home() {
  
    return(
    <main className="grid min-h-screen">
          <SideNavBar />

          <ProjectSection />
      </main>
  );
}
function useClient() {
    throw new Error("Function not implemented.");
}

