import './index.css'
import { Check, Dots, Cross } from '../icons.jsx'

export function Verified() {
  return (
    <div className="status-check-container verified">
      <Check />
      <span>verified</span>
    </div>
  )
}
export function Pending() {
  return (
    <div className="status-check-container pending">
      <Dots />
      <span>pending</span>
    </div>
  )
}
export function Canceled() {
  return (
    <div className="status-check-container canceled">
      <Cross />
      <span>canceled</span>
    </div>
  )
}
