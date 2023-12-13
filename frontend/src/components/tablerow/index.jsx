import React from 'react'
import './index.css'
import { Verified, Pending, Canceled } from '../../../src/components/status'

const DataItem = ({ locationX, locationY, name, date, status, amount }) => {
  const getStatusComponent = (status) => {
    switch (status) {
      case 'verified':
        return <Verified />
      case 'pending':
        return <Pending />
      case 'canceled':
        return <Canceled />
      default:
        return null
    }
  }
  return (
    <div className="data-item-container">
      <div className="data-item">
        <div className="data-item-value">{locationX}</div>
      </div>
      <div className="data-item">
        <div className="data-item-value">{locationY}</div>
      </div>
      <div className="data-item">
        <div className="data-item-value">{name}</div>
      </div>
      <div className="data-item">
        <div className="data-item-value">{date}</div>
      </div>
      <div className="data-item">
        <div className="data-item-status">
          <div className="status-label">{getStatusComponent(status)}</div>
        </div>
      </div>
      <div className="data-item">
        <div className="data-item-value">{amount}</div>
      </div>
    </div>
  )
}

export default DataItem
