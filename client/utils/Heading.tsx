import { memo } from 'react';

const SomeComponent = memo(function Heading({ value }: { value: string }) {
  return (
    <h1>{value}</h1>
  )
});

export default SomeComponent;