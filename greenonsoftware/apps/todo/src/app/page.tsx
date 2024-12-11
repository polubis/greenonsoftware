const enum BoardItemStatus {
  ToDo = 'TO_DO',
  InProgress = 'IN_PROGRESS',
  Done = 'Done',
}
type BoardCellId = string;
type BoardItem = {
  id: string;
  title: string;
  status: BoardItemStatus;
};
type BoardCell = {
  id: BoardCellId;
  title: string;
  items: BoardItem[];
};
type Board = BoardCell[];

const board: Board = [
  {
    id: '1',
    title: 'Do First',
    items: [
      {
        id: '1',
        title: 'Take out the trash',
        status: BoardItemStatus.ToDo,
      },
      {
        id: '2',
        title: 'Prepare presentation slides',
        status: BoardItemStatus.InProgress,
      },
    ],
  },
  {
    id: '2',
    title: 'Shedule',
    items: [
      {
        id: '3',
        title: 'Plan weekly meeting',
        status: BoardItemStatus.ToDo,
      },
      {
        id: '4',
        title: 'Schedule doctor appointment',
        status: BoardItemStatus.ToDo,
      },
    ],
  },
  {
    id: '3',
    title: 'Delegate',
    items: [
      {
        id: '5',
        title: 'Assign tasks to the team',
        status: BoardItemStatus.InProgress,
      },
      {
        id: '6',
        title: 'Send follow-up emails',
        status: BoardItemStatus.ToDo,
      },
    ],
  },
  {
    id: '4',
    title: 'Eliminate',
    items: [
      {
        id: '7',
        title: 'Cancel unused subscriptions',
        status: BoardItemStatus.Done,
      },
      {
        id: '8',
        title: 'Clear clutter from the desk',
        status: BoardItemStatus.ToDo,
      },
    ],
  },
];

const boardClasses = [
  {
    bg: 'bg-rose-100',
  },
  {
    bg: 'bg-emerald-100',
  },
  {
    bg: 'bg-amber-100',
  },
  {
    bg: 'bg-indigo-100',
  },
];

export default function Index() {
  return (
    <main>
      <section className="p-4">
        <ul className="min-h-screen grid gap-4 grid-cols-2 grid-rows-2">
          {board.map(({ id }, index) => (
            <li key={id} className={boardClasses[index].bg}>
              Do First
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
