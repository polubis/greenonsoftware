import { c } from '@greenonsoftware/c';

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

type BoardViewModel = (BoardCell & { classes: string })[];

const board: BoardViewModel = [
  {
    id: '1',
    title: 'Do First',
    classes: 'bg-gradient-to-r from-[#FFB6C1] to-[#DA70D6]',
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
    classes: 'bg-gradient-to-r from-[#FFDAB9] to-[#FFE4B5]',
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
    classes: 'bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB]',
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
    classes: 'bg-gradient-to-r from-[#D3D3D3] to-[#90EE90]',
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

export default function Index() {
  return (
    <main className="bg-gradient-to-b min-h-screen from-white to-[#faf9f9]">
      <section className="p-4 fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <ul className="flex flex-col space-y-4">
          {board.map(({ id, title, items, classes }) => (
            <li key={id} className={c(`rounded-xl p-4`, classes)}>
              <h4 className="text-xl font-bold">
                {title} ({items.length})
              </h4>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
