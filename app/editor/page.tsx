"use client"

import { useState } from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-base">
      <EditorNavbar
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />
      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="pt-12 h-full" />
    </div>
  );
}
