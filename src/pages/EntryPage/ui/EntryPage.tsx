import { Clock, DoorClosedIcon, LaptopMinimal, UserSearchIcon } from 'lucide-react'
import { LoginForm } from 'features/LoginForm'
import { SignupForm } from 'features/SignupForm'
import { Logo } from 'shared/ui/Logo/Logo'
import { Card, CardContent } from 'shared/ui/redesign/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'shared/ui/redesign/tabs'

const EntryPage = () => {
    return (
        <div className="grid grid-cols-1">
            <div className="grid-cols-[1fr,1fr] w-full h-screen grid items-center max-w-6xl justify-self-center gap-12 px-10 overflow-x-auto">
                <section className="flex flex-col gap-8 items-center justify-self-start">
                    <Logo size="xl" />
                    <div className="flex items-center gap-3">
                        <Card className="size-10 flex justify-center items-center p-0">
                            <CardContent className="p-0">
                                <LaptopMinimal className="size-5" />
                            </CardContent>
                        </Card>
                        <Card className="size-10 flex justify-center items-center p-0">
                            <CardContent className="p-0">
                                <DoorClosedIcon className="size-5" />
                            </CardContent>
                        </Card>
                        <Card className="size-10 flex justify-center items-center p-0">
                            <CardContent className="p-0">
                                <Clock className="size-5" />
                            </CardContent>
                        </Card>
                        <Card className="size-10 flex justify-center items-center p-0">
                            <CardContent className="p-0">
                                <UserSearchIcon className="size-5" />
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="justify-self-end">
                    <Tabs defaultValue="register">
                        <TabsList className="w-full">
                            <TabsTrigger className="w-full" value="register">
                                Регистрация
                            </TabsTrigger>
                            <TabsTrigger className="w-full" value="login">
                                Вход
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent className="mt-4" value="register">
                            <Card>
                                <CardContent className="pt-6">
                                    <SignupForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent className="mt-4" value="login">
                            <Card>
                                <CardContent className="pt-6">
                                    <LoginForm />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>
            </div>
        </div>
    )
}

export default EntryPage
