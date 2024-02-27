import React from 'react'

const Todo = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                    Todo
                </td>
                <td className="px-6 py-4">
                  Learn NextJS
                </td>
                <td className="px-6 py-4">
                  Pending
                </td>
                <td className="px-6 py-4 flex gap-1">
                  <button className='py-2 px-4 bg-red-500 text-white'>Delete</button>
                  <button className='py-2 px-4 bg-green-500 text-white'>Done</button>
                </td>
            </tr>
  )
}

export default Todo