// import React from "react";

// const ListViewPage = ({ task, onBack }) => {
//   return (
//     <div className="p-6  min-h-screen">
//       <button
//         onClick={onBack}
//         className="mb-4 px-4 py-2 bg-white border border-gray-300 rounded"
//       >
//         ← Back
//       </button>


//       <div className="bg-white border border-gray-300 rounded shadow-sm p-6">
//         <div className="grid grid-cols-12 gap-6">

//           <div className="col-span-8 space-y-6 border border-gray-200 rounded-xl p-6">
//             {/* TITLE */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Task Title</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white">
//                 {task.title}
//               </div>
//             </div>

//             {/* DETAILS */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Details</p>
//               <div className="border border-gray-300 rounded px-3 py-4 bg-white min-h-[120px] text-gray-700">
//                 {task.details}
//               </div>
//             </div>

//             {/* COMMENTS */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Comments</p>
//               <div className="border border-gray-300 rounded bg-white min-h-[120px] p-3 space-y-2">
//                 <input
//                   placeholder="Add a comment..."
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//                 />

//                 {task.comments?.list?.length > 0 ? (
//                   task.comments.list.map((c) => (
//                     <div
//                       key={c.id}
//                       className="border border-gray-200 rounded p-2 text-sm"
//                     >
//                       <p className="font-medium">{c.author}</p>
//                       <p className="text-gray-600">{c.text}</p>
//                       <p className="text-xs text-gray-400">{c.time}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-sm text-gray-400">No comments yet</p>
//                 )}
//               </div>
//             </div>

//             {/* ACTIVITY LOG */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Activity log</p>
//               <div className="border border-gray-300 rounded bg-white min-h-[120px] p-3 space-y-2">
//                 {task.activityLog?.length > 0 ? (
//                   task.activityLog.map((a) => (
//                     <div key={a.id} className="text-sm text-gray-600">
//                       • {a.action} —{" "}
//                       <span className="text-gray-400">{a.time}</span>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-sm text-gray-400">No activity yet</p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="col-span-4 space-y-4 border border-gray-200 rounded-xl p-6">
//             {/* Status */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Status</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
//                 {task.status || "-"}
//               </div>
//             </div>

//             {/* Priority */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Priority</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
//                 {task.priority || "-"}
//               </div>
//             </div>

//             {/* Assignee */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Assignee</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
//                 {task.assignee || "-"}
//               </div>
//             </div>

//             {/* Due Date */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Due date</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
//                 {task.dueDate || "-"}
//               </div>
//             </div>

//             {/* Labels */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Labels</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
//                 {task.labels?.length ? task.labels.join(", ") : "-"}
//               </div>
//             </div>

//             {/* Estimate */}
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Estimate</p>
//               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm">
//                 {task.estimate || "-"}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListViewPage;
import React from 'react'

const ListViewPage = () => {
  return (
    <div>ListViewPage</div>
  )
}

export default ListViewPage