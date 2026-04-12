export default function Education() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          Education
        </h2>

        <div className="space-y-6">

          {/* College */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  Institute of Engineering and Technology, Lucknow
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Lucknow, U P, India</span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">
                B. Tech. - Computer Science and Engineering
              </p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-2 border-t border-gray-100 dark:border-slate-700 pt-2">
              Nov 2023 - Jun 2027
            </p>
          </div>

          {/* Class 12 */}

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  Bhavan's K D K Vidhya Mandir Renukoot
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Sonebhadra, U P, India</span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">
                Class XII - Physics, Chemistry, Math, Computer Science | 90.08%
              </p>
             </div>
             <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-2 border-t border-gray-100 dark:border-slate-700 pt-2">
              Apr 2021 - May 2022
             </p>
          </div>

        </div>

      </div>
    </section>
  )
}