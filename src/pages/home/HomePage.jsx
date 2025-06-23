import React from 'react'

const HomePage = () => {
    return (
        <div>
            <section className="bg-yellow-100 text-center py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference Today</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-700">
                    Join us in bringing hope to those in need. Every contribution counts.
                </p>
                <a
                    href="/donate"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition"
                >
                    Donate Now
                </a>
            </section>
        </div>
    )
}

export default HomePage