import React from 'react'
import Head from 'next/head'


export default function Profile() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-full w-40 h-40 object-cover border-4 border-blue-500 shadow-lg" />
        </figure>
        <div class="card-body items-center">
          <h2 class="card-title">John Wick</h2>
          <div className='my-4'>
            <p>Ph No: +91 8765432190</p>
            <p>Current Bal: $100</p>
            <p className='mt-4'>No Loans waiting for approval</p>
          </div>

          <div class="card-actions">
            <button class="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </main>
  )
}