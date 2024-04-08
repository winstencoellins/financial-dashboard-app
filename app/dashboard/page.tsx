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
                    <table className="table-auto">
                        <thead>
                        <tr>
                            <th className='text-left'>Description</th>
                            <th className='text-left'>Type</th>
                            <th className='text-left'>Date</th>
                            <th className='text-left'>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                transactions.map((t) => (
                                    <tr key={t.id}>
                                        <td className="text-left">{t.desc}</td>
                                        <td className="text-left">{t.type}</td>
                                        <td className="text-left">{t.date}</td>
                                        <td className="text-left">{t.amount}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}