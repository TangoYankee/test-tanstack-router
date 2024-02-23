import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div style={{position: "absolute", zIndex: 1 }}>
        <Link to="/" >
          Home
        </Link>{' '}
        <Link to="/land-use" >
          Land use
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
