import { createLazyFileRoute } from '@tanstack/react-router';
import { LandUseLayout } from '../components/land-use.component';

export const Route = createLazyFileRoute("/land-use")({
  component: LandUse,
})

function LandUse () {
  return <LandUseLayout />
}
