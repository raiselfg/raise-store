import { Container } from '@/shared/components/ui/container';
import { Skeleton } from '@/shared/components/ui/skeleton';

export default function ProductsLoading() {
  return (
    <Container>
      <div className="grid py-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((product, i) => (
          <Skeleton key={i} className="w-[280px] h-[360px]" />
        ))}
      </div>
    </Container>
  );
}
