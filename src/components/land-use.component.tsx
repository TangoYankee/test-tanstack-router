import { Link, Outlet } from "@tanstack/react-router";
import { Spatial } from "./spatial.component";

export function LandUseLayout () {
    return <>
        <div style={{ position: "absolute", top: "50px", zIndex: 1}}>
            <Link to="tax-lot/123" style={{paddingRight: "10px"}}>Tax Lot Details</Link>
            <Link to="/land-use">Main map</Link>
        </div>
        <Spatial />
        <Outlet />
    </>
}