/* eslint-disable react/jsx-key */
import { flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { GrUpdate } from 'react-icons/gr';
import PropTypes from 'prop-types';

const React_Table = ({ myFood, handleDelete }) => {
    let goto = useNavigate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columnDef = [
        {
            accessorKey: "foodImg",
            // eslint-disable-next-line react/prop-types
            Cell: ({ cell }) => <img src={cell.row.original.foodImg} alt="" />,
            header: 'Food Image'
        },
        {
            accessorKey: "foodName",
            header: 'Food Name'
        },
        {
            accessorKey: "expDate",
            header: 'Expire Date'
        },
        {
            accessorKey: "foodStatus",
            header: 'Food Status'
        },
        {
            accessorKey: "",
            header: 'Update'
        },
        {
            accessorKey: "",
            header: 'Delete'
        },
        {
            accessorKey: "",
            header: 'Manage Food'
        },
    ]

    const finalData = useMemo(() => myFood, [myFood])
    const finalColumn = useMemo(() => columnDef, [columnDef])

    let tableInstance = useReactTable({
        columns: finalColumn,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="overflow-x-auto my-5">
            <table className="table table-zebra-zebra ">
                <thead>
                    {tableInstance.getHeaderGroups().map((headerEl) => {
                        return (
                            <tr className="text-2xl font-bold" key={headerEl.id}>
                                {headerEl.headers.map((columnEl) => {
                                    return (
                                        <th key={columnEl.id} colSpan={columnEl.colSpan}>
                                            {columnEl.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    columnEl.column.columnDef.header,
                                                    columnEl.getContext()
                                                )}
                                        </th>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {tableInstance.getRowModel().rows.map((rowEl) => (
                        <tr key={rowEl.id}>
                            <td>
                                <img src={rowEl.original.foodImg} className="w-20 h-20 md:w-40 md:h-40 rounded-full" />
                            </td>
                            <td className="text-xl font-bold">{rowEl.original.foodName}</td>
                            <td className="text-lg font-semibold">{rowEl.original.expDate}</td>
                            <td className="text-lg font-semibold">{rowEl.original.foodStatus}</td>
                            <td><button onClick={() => goto(`/update/${rowEl.original._id}`)} className="btn rounded-full"><GrUpdate className='text-2xl'></GrUpdate></button></td>
                            <td><button onClick={() => handleDelete(rowEl.original._id)} className="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></td>
                            <td><button onClick={() => goto(`/manage/${rowEl.original._id}`)} className="bg-lime-500 text-white px-4 py-2 rounded-md text-lg">Manage</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
React_Table.propTypes = {
    myFood: PropTypes.array,
    handleDelete: PropTypes.func
}
export default React_Table;