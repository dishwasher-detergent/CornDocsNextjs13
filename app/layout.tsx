import '#/styles/globals.css';
import Nav from '#/ui/Layout/nav';
import Sidebar from '#/ui/Layout/sidebar';
import { SidebarProvider } from '#/context/sidebarContext';
import { DarkmodeProvider } from '#/context/darkModeContext';
import { CommandProvider } from '#/context/commandContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommandProvider>
      <SidebarProvider>
        <DarkmodeProvider>
          <html lang="en">
            <head />
            <body>
              <div className="relative flex min-h-screen w-full flex-col items-center dark:bg-slate-900">
                <Nav />
                <div className="z-10 w-full max-w-[90rem] flex-1 px-4 sm:px-6 md:px-8">
                  <Sidebar directory="/app" />
                  <main className={`${'lg:pl-[19.5rem]'}`}>{children}</main>
                </div>
                <div className="griddy fixed top-16 h-48 w-full opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900" />
                </div>
              </div>
            </body>
          </html>
        </DarkmodeProvider>
      </SidebarProvider>
    </CommandProvider>
  );
}
