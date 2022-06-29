import React from 'react'
import { Link } from 'react-router-dom'

export default function Dossiers() {
  return (
    <div>
        Dossier
        <div>
        <Link to="/admin" className="btn btn-primary">dossier re</Link>
        </div>
    </div>
  )
}
