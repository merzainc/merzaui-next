'use client';
import { Button } from '@/components/Button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/Table';
import { useTheme } from '@merzaui/react';
import { ImCodepen } from 'react-icons/im';

const players = [
  {
    rank: 1,
    name: 'Connor McDavid',
    position: 'C',
    gamesPlayed: 82,
    goals: 45,
    assists: 68,
    points: 113,
    plusMinus: 28,
  },
  {
    rank: 2,
    name: 'Leon Draisaitl',
    position: 'C',
    gamesPlayed: 82,
    goals: 50,
    assists: 55,
    points: 105,
    plusMinus: 20,
  },
  {
    rank: 3,
    name: 'Nathan MacKinnon',
    position: 'C',
    gamesPlayed: 82,
    goals: 40,
    assists: 65,
    points: 105,
    plusMinus: 30,
  },
  {
    rank: 4,
    name: 'Auston Matthews',
    position: 'C',
    gamesPlayed: 82,
    goals: 60,
    assists: 40,
    points: 100,
    plusMinus: 15,
  },
  {
    rank: 5,
    name: 'Mitch Marner',
    position: 'RW',
    gamesPlayed: 82,
    goals: 35,
    assists: 65,
    points: 100,
    plusMinus: 25,
  },
  {
    rank: 6,
    name: 'David Pastrnak',
    position: 'RW',
    gamesPlayed: 82,
    goals: 48,
    assists: 47,
    points: 95,
    plusMinus: 10,
  },
  {
    rank: 7,
    name: 'Nikita Kucherov',
    position: 'RW',
    gamesPlayed: 82,
    goals: 40,
    assists: 54,
    points: 94,
    plusMinus: 18,
  },
  {
    rank: 8,
    name: 'Artemi Panarin',
    position: 'LW',
    gamesPlayed: 82,
    goals: 30,
    assists: 60,
    points: 90,
    plusMinus: 12,
  },
  {
    rank: 9,
    name: 'Steven Stamkos',
    position: 'C',
    gamesPlayed: 82,
    goals: 42,
    assists: 45,
    points: 87,
    plusMinus: 14,
  },
  {
    rank: 10,
    name: 'Patrick Kane',
    position: 'RW',
    gamesPlayed: 82,
    goals: 35,
    assists: 50,
    points: 85,
    plusMinus: 5,
  },
];

const IndexPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <main className='mx-auto max-w-7xl px-4 pt-8 sm:px-6'>
      <div className='mb-4 flex items-center gap-2.5'>
        <Button
          onClick={() => setTheme(theme === 'dark-theme' ? 'light' : 'dark-theme')}
          leftSlot={<ImCodepen className='size-4' />}
          variant='primary'
        >
          Primary
        </Button>
        <Button variant='secondary'>Secondary</Button>
      </div>

      <Table
        dense
        striped
        grid
        className='[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]'
      >
        <TableHead>
          <TableRow>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Player</TableHeader>
            <TableHeader className='text-right'>Pos</TableHeader>
            <TableHeader className='text-right'>GP</TableHeader>
            <TableHeader className='text-right'>G</TableHeader>
            <TableHeader className='text-right'>A</TableHeader>
            <TableHeader className='text-right'>P</TableHeader>
            <TableHeader className='text-right'>+/-</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.rank} href='/user'>
              <TableCell className='tabular-nums'>{player.rank}</TableCell>
              <TableCell className='font-medium'>{player.name}</TableCell>
              <TableCell className='text-right'>{player.position}</TableCell>
              <TableCell className='text-right tabular-nums'>{player.gamesPlayed}</TableCell>
              <TableCell className='text-right tabular-nums'>{player.goals}</TableCell>
              <TableCell className='text-right tabular-nums'>{player.assists}</TableCell>
              <TableCell className='text-right tabular-nums'>{player.points}</TableCell>
              <TableCell className='text-right tabular-nums'>{player.plusMinus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default IndexPage;
