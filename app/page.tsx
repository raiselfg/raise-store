import { ProductCardList } from '@/shared/components/shared/product-card-list';
import { ProductFilters } from '@/shared/components/shared/product-filters';
import { Container } from '@/shared/components/ui/container';

export default function Home() {
  return (
    <>
      <Container>
        <ProductFilters />
        <ProductCardList />
      </Container>
    </>
  );
}
