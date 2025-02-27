import { GithubLogo } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center w-full bg-[#080036] text-[#AEB5D6]">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-lg font-bold">2 Connect - CRM | Copyright: {data}</p>
                    <p className="text-lg">Acesse nosso portifólio</p>
                    <div className="flex gap-4 pt-1">
                        <a className="" href="" target="_blank"><GithubLogo size={40} weight='regular' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer