import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/land-use/tax-lot/$taxLotBbl')({
  component: LandUseTaxLotDetail 
})

export function LandUseTaxLotDetail() {
  const { taxLotBbl} = Route.useParams()
  return <div style={{ position: "absolute", top: "100px" }}>Details for tax lot: {taxLotBbl}</div>
}