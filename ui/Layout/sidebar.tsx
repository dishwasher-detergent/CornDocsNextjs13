import fs from 'fs';

function getDirectoryTree(path: string): object[] {
  const tree = [];
  const items = fs.readdirSync(path);
  items.forEach((item) => {
    const itemPath = `${path}/${item}`;
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      tree.push({
        name: item,
        type: 'directory',
        path: itemPath,
        children: getDirectoryTree(itemPath),
      });
    } else if (stats.isFile()) {
      tree.push({
        name: item,
        type: 'file',
        size: stats.size,
      });
    }
  });

  return tree;
}

export default function Sidebar() {
  const folders = getDirectoryTree(process.cwd() + '/app');

  return folders.map((folder) => (
    <Button folders={folder}>{folder.name}</Button>
  ));
}

const Button = ({ children, folders }: any) => {
  return !folders.children ? (
    <li>
      <a className="flex cursor-pointer flex-row flex-nowrap items-center gap-2 truncate rounded-xl px-3 py-1.5 font-bold hover:bg-slate-100 dark:hover:bg-slate-800">
        {children}
      </a>
    </li>
  ) : (
    <>
      <li>
        <button
          className={`flex cursor-pointer flex-row flex-nowrap items-center gap-2 truncate rounded-xl bg-slate-100 px-3 py-1.5 font-bold hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-800`}
        >
          <span className="flex w-full flex-row items-center gap-2 truncate">
            {children}
          </span>
        </button>
        <ul className="ml-4 mt-1 flex flex-col gap-1">
          {folders.children.map((item, index: number) => {
            return !item.children ? (
              <li key={index}>
                <a className="flex cursor-pointer flex-row flex-nowrap items-center justify-start gap-2 truncate rounded-xl px-3 py-1.5 font-bold hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span>{item.name}</span>
                </a>
              </li>
            ) : (
              <Button folders={item} key={index}>
                <>
                  <span>{item.name}</span>
                </>
              </Button>
            );
          })}
        </ul>
      </li>
    </>
  );
};
