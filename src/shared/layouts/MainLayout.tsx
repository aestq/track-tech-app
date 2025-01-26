import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/Sidebar'

export const MainLayout = () => {
    return (
        <div className="grid grid-cols-1">
            <main className="p-3 grid max-w-7xl grid-cols-[min-content,1fr] w-full justify-self-center gap-5">
                <div className="sticky top-3 h-[80vh]">
                    <Sidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
