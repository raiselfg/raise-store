import { Container } from '@/shared/components/ui/container';
import { Skeleton } from '@/shared/components/ui/skeleton';

export default function ProductsLoading() {
  return (
    <Container>
      <div className="flex justify-between items-start">
        <div className="flex gap-12">
          <div className="space-y-3">
            <h3 className="font-medium">Brands</h3>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-5 w-40" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Categories</h3>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-5 w-40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-medium text-center">Sort by</h3>
        <Skeleton className="w-[280px]" />
      </div>
      <div className="grid py-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-75 h-90" />
        ))}
      </div>
    </Container>
  );
}
