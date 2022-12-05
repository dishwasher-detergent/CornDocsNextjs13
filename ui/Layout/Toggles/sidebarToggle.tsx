'use client';

import { X, Menu } from 'lucide-react';
import { useContext } from 'react';
import { SidebarContext } from '#/context/sidebarContext';

const SidebarToggle = () => {
  /* @ts-ignore */
  const { sidebar, toggleSidebar } = useContext(SidebarContext);

  return (
    <button
      type="button"
      className="hover:bg-primary-200/20 dark:hover:bg-primary-500/10 flex items-center justify-center rounded-xl p-2"
      onClick={() => toggleSidebar()}
    >
      <span className="sr-only">Navigation</span>
      {sidebar ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};

export default SidebarToggle;
