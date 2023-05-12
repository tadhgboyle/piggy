import {IconCurrencyDollar} from "@tabler/icons-react";

export default function MoneyInput({ value, setData, id }: { value: number, setData: any, id: string }) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IconCurrencyDollar />
            </div>
            <input
                type="number"
                id={id}
                step={0.01}
                value={value}
                className="mt-1 block w-full pl-10 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                onChange={e => setData(id, e.target.value)}
                onBlur={e => setData(id, parseFloat(e.target.value).toFixed(2))}
                required />
        </div>
    )
}
