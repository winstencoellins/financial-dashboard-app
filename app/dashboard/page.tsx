import Image from "next/image"
import wallet from "@/svg/wallet.svg"

export default function Dashboard () {
    let cards = [
        {id: 1, icon: wallet, title: 'Current Balance'},
        {id: 2, icon: "", title: 'Monthly Income'},
        {id: 3, icon: "", title: 'Total Spend'},
    ]

    let transactions = [
        {id: 1, desc: "Target", type: "Groceries", date:'1900-01-01', amount: 0.00},
        {id: 2, desc: "Laptop", type: "Electronics", date:'1900-01-01', amount: 0.00},
        {id: 3, desc: "Headphone", type: "Electronics", date:'1900-01-01', amount: 0.00},
        {id: 4, desc: "Lamp", type: "Electronics", date:'1900-01-01', amount: 0.00},
    ]

    return (
        <div className="">
            <div className="grid grid-cols-5 gap-x-20">
                {
                    cards.map((card) => (
                        <div key={card.id} className="bg-[#434343] rounded-xl px-3 py-3">
                            {/* <div className="w-10 h-10 bg-green-100 rounded-full">
                                <Image src={card.icon} alt="icon" width={31} height={31} />
                            </div> */}
                            <Image src={card.icon} alt="icon" width={58} height={58} />


                            <p className="mt-4 mb-1 text-sm text-[#ABABAB]">{card.title}</p>
                            <h1 className="text-xl font-bold text-white">$10000.00</h1>
                        </div>
                    ))
                }
            </div>

            <div>
                <div>
                    <h1>Transaction History</h1>
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Page name
                                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Visitors
                                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Unique users
                                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Bounce rate
                                        </th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            /argon/
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            4,569
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            340
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            46,53%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                            /argon/index.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            3,985
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            319
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            46,53%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                            /argon/charts.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            3,513
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            294
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            36,49%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                            /argon/tables.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            2,050
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            147
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            50,87%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                            /argon/profile.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            1,795
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            190
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                            46,53%
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}