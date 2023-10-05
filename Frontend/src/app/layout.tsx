import './globals.css'
import type { Metadata } from 'next'
import { Mooli } from 'next/font/google'
import NextUIProviders from './nextui.provider'
import { ErrorModal, NavigationBar, TransactionToast } from '@app/_components'
import ReduxProviders from '@redux'
import { ConfirmTransaction } from './_components/Modals/ConfirmTransactionModal'
import { ConnectMetamask } from './_components'

const font = Mooli({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => (<html lang="en" suppressHydrationWarning className="light text-foreground bg-background">
    <body className={font.className}>
        <NextUIProviders>
            <ReduxProviders>
                <NavigationBar />
                <ConnectMetamask />
                <ConfirmTransaction />
                <ErrorModal />
                <TransactionToast />
                <div className="max-w-[1024px] mx-auto mt-12">
                    {children}
                </div>
            </ReduxProviders>
        </NextUIProviders>
    </body>
</html>)

export default RootLayout
