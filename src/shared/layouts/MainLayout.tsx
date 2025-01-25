import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/Sidebar'

export const MainLayout = () => {
    return (
        <div className="flex justify-center">
            <main className="flex max-w-7xl h-screen w-full gap-5">
                <div className="sticky top-0 h-[80vh]">
                    <Sidebar />
                </div>
                <Outlet />
            </main>
        </div>
    )
}
