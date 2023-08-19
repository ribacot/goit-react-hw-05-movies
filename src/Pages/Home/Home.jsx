import { NavLink } from "react-router-dom"

export default function Home() {
    console.log('home')
    return <><h1>Home</h1>
    <NavLink to="selected_movie">Select Movie</NavLink></>
}