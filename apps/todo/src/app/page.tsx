import React from 'react';
import { Calendar } from './components/calendar';
import { clsx } from 'clsx';

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

type BoardViewModel = (Board[number] & { classes: string; opened: boolean })[];

const board: BoardViewModel = [
  {
    id: '1',
    title: 'Do First',
    classes: 'bg-gradient-to-r from-[#FFB6C1] to-[#DA70D6]',
    opened: true,
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
    opened: true,
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
    opened: true,
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
    opened: true,
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
    <main className="relative bg-gradient-to-b min-h-screen from-white to-[#faf9f9]">
      <section className="bg-white border-b border-gray-600 h-full sticky top-0 left-0 z-10">
        <Calendar />
      </section>
      <section className="p-4">
        <ul className="grid gap-4">
          {board.map(({ id, title, items, classes, opened }) => (
            <li key={id} className={clsx(`rounded-xl p-4`, classes)}>
              <h5 className="text-xl font-bold">
                {title} ({items.length})
              </h5>
              {opened && (
                <ul className="grid gap-2 text-lg mt-4">
                  {items.map((item) => (
                    <li
                      className="bg-white/40 rounded-xl px-4 py-2 relative overflow-hidden"
                      key={item.id}
                    >
                      <div
                        className="absolute left-0 w-full transition-all h-full bottom-0 bg-white/60"
                        style={{
                          transform: `translateX(-40%)`,
                        }}
                      />
                      <div className="relative">
                        <h6>{item.title}</h6>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
