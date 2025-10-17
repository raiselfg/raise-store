import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { SearchInput } from './search-input';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-30 h-auto">
      <Container className="flex items-center gap-4 py-4">
        <Link href={'/'}>
          <h1 className="text-center text-2xl">@raiselfg</h1>
        </Link>

        <SearchInput />
        <section className="flex gap-1">
          <Link href={'/dashboard'}>
            <Button>Dashboard</Button>
          </Link>
          <Button size="icon">
            <Heart />
          </Button>
          <Button size="icon">
            <ShoppingCart />
          </Button>
        </section>
        <ThemeToggle />
      </Container>
    </header>
  );
};
