import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div style={{ position: "absolute", top: "20px"}}>
      <h3>Welcome to your profile</h3>
      <p>Save your favorite tax lots, make different views, work on projects</p>
    </div>
  )
}
