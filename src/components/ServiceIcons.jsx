import outdoorServicesIcon from '../assets/OSIcon.png'
import mechanicalServicesIcon from '../assets/MSIcon.png'

function LandscapeIcon() {
  return (
    <img src={outdoorServicesIcon} alt="" loading="lazy" />
  )
}

function ManagementIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="m8 16 2 2 4-5" />
    </svg>
  )
}

function FacilitiesIcon() {
  return (
    <img src={mechanicalServicesIcon} alt="" loading="lazy" />
  )
}

function ContractingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 18h16" />
      <path d="M7 18V9l5-3 5 3v9" />
      <path d="M9 12h6" />
      <path d="M9 15h4" />
    </svg>
  )
}

const serviceIcons = {
  landscape: LandscapeIcon,
  contracting: ContractingIcon,
  management: ManagementIcon,
  facilities: FacilitiesIcon,
}

export { serviceIcons }