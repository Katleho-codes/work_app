import React from 'react'
import Navbar from '../../../components/Navbar'

function Dashboard() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
          <section>
                      <h1>Dashboard</h1>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg>
                        Last month
                      </button>
          </section>

                    <section>
                        <article>
                            <div className="dashboard_card_title">
                                <h3>Units in</h3>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Dashboard
