import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>404 page inexistante</h2>
      <p>verifier la page</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound
