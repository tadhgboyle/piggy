import {Account} from "@/types";
import MoneyDisplay from "@/Components/MoneyDisplay";
import Modal from "@/Components/Modal";
import {FormEventHandler, useState} from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {useForm} from "@inertiajs/react";

export default function AccountCard({ account }: { account: Account }) {
    const [showUpdateBalanceModal, setShowUpdateBalanceModal] = useState(false);

    const { data, setData, patch, processing, errors } = useForm({
        balance: account.balance.amount,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('accounts.balance.update', account.id));

        setShowUpdateBalanceModal(false);
    };

    return (
        <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-10 h-10 mb-2 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
            </svg>
            <a href={route('accounts.show', account.id)}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 hover:underline">
                    {account.name} Account
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500">
                Balance: <MoneyDisplay className="hover:underline cursor-pointer" money={account.balance} onClick={() => setShowUpdateBalanceModal(true)}/>
                <Modal show={showUpdateBalanceModal} onClose={() => setShowUpdateBalanceModal(false)}>
                    <form onSubmit={submit}>
                        <TextInput
                            id="balance"
                            type="number"
                            name="balance"
                            value={data.balance}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('balance', e.target.value)}
                        />

                        <InputError message={errors.balance} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Update Balance
                            </PrimaryButton>
                        </div>
                    </form>
                </Modal>
            </p>
        </div>
    );
}