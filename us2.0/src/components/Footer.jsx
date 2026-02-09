const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='footer'>
      <p>Copyright © {currentYear} Us</p>
      <p>Website by Rasmus Ruonakoski</p>
    </div>
  )
}

export default Footer
