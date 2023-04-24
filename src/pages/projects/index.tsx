import React from 'react'
import Navbar from '../../../components/Navbar'
import InputField from '../../../components/InputField'

export default function Projects() {
  return (
    <>
      <Navbar />

      <main>
        <div className="container flex justify-center flex-col mx-auto">
          <section className="my-4">
            <h1 className="text-5xl font-bold">Projects</h1>
          </section>
          <section className="my-4">
            <InputField className="searchInput input" name="search" type="search" placeholder="Search here" />
          </section>
          <section>
            <table className="w-100 mt-4 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th>Units</th>
                  <th>Unit name</th>
                  <th>Date assessed</th>
                  <th>Assessment completion date</th>
                  <th>Date completed</th>
                  <th>Status</th>
                  <th>Technician</th>
                  <th>Progress</th>
                  <th>Unit problem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  )
}
