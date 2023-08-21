import Image from "next/image";

type Props = {
    title?: string,
}

export const TopBar = ({
    title = 'DHIS2 Chatbot',
}: Props) => {
    return (
        <>
            <div className={'w-full sticky top-0 z-50 bg-white flex items-center justify-between align-center px-10 py-4 border-b'}>
                <div className={'flex items-center'}>
                    <Image
                        src={'/dhis2-logo.svg'}
                        alt={'dhis2 logo'}
                        width={35}
                        height={35}
                    />

                    <h1 className={'text-xl font-bold ml-2'}>{title}</h1>
                </div>
            </div>
        </>
    )
}
