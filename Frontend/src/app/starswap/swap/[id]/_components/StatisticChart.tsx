import { Card, CardHeader, Image, CardBody, Divider } from '@nextui-org/react'
import { Address } from 'web3'

interface StatisticChartProps {
    liquidityPool: Address 
    className? : string,
}

export const StatisticChart = (props: StatisticChartProps) => {
    return ( <Card className={`w-full ${props.className}`}>
        <CardHeader className="flex gap-3">
            <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
            />
            <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
    </Card>)
}